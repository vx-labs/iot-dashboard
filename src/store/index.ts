import Vue from 'vue'
import Vuex from 'vuex'
import { MainState, Topic, Event, Application, ApplicationProfile, Session, Record } from './types'

import session from './modules/session'
import loader from './modules/loader'
import { ApolloClient } from 'apollo-client';
import { from, split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { fullStateQuery, fullStateSubscription, getTopicRecords } from './queries'

Vue.use(Vuex)


const maxEvents = 500;
const store = new Vuex.Store({
  state: new MainState(),
  getters: {
    username(state) { return state.username },
    now(state) { return state.now },
    topics(state) { return state.resources.topics; },
    sessions(state) { return state.resources.sessions; },
    applications(state) { return state.resources.applications; },
    applicationProfiles(state) { return state.resources.applicationProfiles; },
    events(state) { return state.resources.events; },
    selectedTopic(state) { return state.resources.selectedTopic },
    selectedTopicRecords(state) { return state.resources.selectedTopicRecords },
    areTopicsLoading(state, getters) { return getters['topicList/isPending'] },
    areEventsLoading(state, getters) { return getters['eventList/isPending'] },
    isSelectedTopicRecordsLoading(state, getters) { return getters['topicRecords/isPending'] },
  },
  mutations: {
    graphqlClientSet(state, client) {
      state.graphql = client;
    },
    usernameSet(state, username: string) {
      state.username = username;
    },
    timeTicked(state, now: Date) {
      state.now = now;
    },
    eventsLoaded(state, events: Event[]) {
      if (events.length > maxEvents) {
        events = events.slice(events.length - maxEvents, events.length)
      }
      state.resources.events = events;
    },
    eventAppended(state, event: Event) {
      state.resources.events.push(event);
      if (state.resources.events.length > maxEvents) {
        state.resources.events = state.resources.events.slice(state.resources.events.length - maxEvents, state.resources.events.length)
      }
    },
    topicsLoaded(state, topics: Topic[]) {
      state.resources.topics = topics;
    },
    topicSelected(state, { topic }) {
      state.resources.selectedTopic = topic;
      state.resources.selectedTopicRecords = [];
    },
    selectedTopicRecordsFetched(state, { records }) {
      state.resources.selectedTopicRecords = records.map((elt: Record) => Object.assign({}, elt, {sentAt: new Date(elt.sentAt)}));
    },
    applicationsLoaded(state, applications: Application[]) {
      state.resources.applications = applications;
    },
    applicationCreated(state, application: Application) {
      const idx = state.resources.applications.findIndex(elt => elt.id === application.id)
      if (idx === -1) {
        state.resources.applications.push(application);
      } else {
        state.resources.applications.splice(idx, 1, application);
      }
    },
    applicationDeleted(state, id: string) {
      if (state.resources.applicationProfiles.some(elt => elt.applicationId === id)) {
        state.resources.applicationProfiles = state.resources.applicationProfiles.filter(elt => elt.applicationId !== id);
      }
      const idx = state.resources.applications.findIndex(elt => elt.id === id)
      if (idx > -1) {
        state.resources.applications.splice(idx, 1);
      }
    },
    applicationProfilesLoaded(state, applicationProfiles: ApplicationProfile[]) {
      state.resources.applicationProfiles = applicationProfiles;
    },
    applicationProfileCreated(state, applicationProfile: ApplicationProfile) {
      const idx = state.resources.applicationProfiles.findIndex(elt => elt.id === applicationProfile.id)
      if (idx === -1) {
        state.resources.applicationProfiles.push(applicationProfile);
      } else {
        state.resources.applicationProfiles.splice(idx, 1, applicationProfile);
      }
    },
    applicationProfileDeleted(state, id: string) {
      const idx = state.resources.applicationProfiles.findIndex(elt => elt.id === id)
      if (idx > -1) {
        state.resources.applicationProfiles.splice(idx, 1);
      }
    },
    sessionsLoaded(state, sessions: Session[]) {
      state.resources.sessions = sessions;
    },
    sessionConnected(state, session: Session) {
      const idx = state.resources.sessions.findIndex(elt => elt.id === session.id)
      if (idx === -1) {
        state.resources.sessions.push(session);
      } else {
        state.resources.sessions.splice(idx, 1, session);
      }
    },
    sessionDisconnected(state, id: string) {
      const idx = state.resources.sessions.findIndex(elt => elt.id === id)
      if (idx > -1) {
        state.resources.sessions.splice(idx, 1);
      }
    },
  },
  actions: {
    async init({ dispatch, state, commit }) {
      const httpLink = new HttpLink({ uri: 'https://api.iot.cloud.vx-labs.net/graphql', fetch });
      const httpAuthLink = setContext(async (request, previousContext) => ({
        headers: {
          authorization: `bearer ${await dispatch('refreshToken', {}, { root: true })}`,
        },
      }));
      const wsLink = new WebSocketLink({
        uri: "wss://api.iot.cloud.vx-labs.net/graphql", // use wss for a secure endpoint
        options: {
          connectionParams: async () => {
            return {
              'Authorization': await dispatch('refreshToken', {}, { root: true }),
            }
          },
          reconnect: true
        }
      });

      const link = split(
        ({ query }) => {
          const out = getMainDefinition(query);
          return out.kind === 'OperationDefinition' && out.operation === 'subscription';
        },
        wsLink,
        from([
          httpAuthLink,
          httpLink,
        ]),
      );

      const graphqlClient = new ApolloClient({
        link: link,
        cache: new InMemoryCache(),
      });
      commit('graphqlClientSet', graphqlClient);
      await dispatch('refreshState');
      graphqlClient.subscribe({
        query: fullStateSubscription,
      }).subscribe({
        next({ data }) {
          const event = data.auditEvents;
          switch (event.payload.__typename) {
            case 'SessionConnectedEvent':
              commit('sessionConnected', event.payload.session)
              break
            case 'SessionDisconnectedEvent':
              commit('sessionDisconnected', event.payload.id)
              break
            case 'ApplicationCreatedEvent':
              commit('applicationCreated', event.payload.application)
              break
            case 'ApplicationDeletedEvent':
              commit('applicationDeleted', event.payload.id)
              break
            case 'ApplicationProfileCreatedEvent':
              commit('applicationProfileCreated', event.payload.applicationProfile)
              break
            case 'ApplicationProfileDeletedEvent':
              commit('applicationProfileDeleted', event.payload.id)
              break
            default:
              console.log(`unmatched event: ${event.payload.__typename}`)
          }
        },
        error(err) { console.error('err', err); },
      });
    },
    async refreshSelectedTopicRecords({ state, dispatch, commit }) {
      return dispatch('topicRecords/load', async () => {
        if (state.graphql === undefined) {
          throw ("init not done");
        }
        const { data } = await state.graphql.query({ query: getTopicRecords, variables: { pattern: state.resources.selectedTopic } });
        commit('selectedTopicRecordsFetched', { records: data.topics[0].records });
      });
    },
    async selectTopic({ dispatch, commit }, topic: string) {
      commit('topicSelected', { topic });
      await dispatch('refreshSelectedTopicRecords');
    },
    async refreshState({ dispatch, commit, state }) {
      return dispatch('topicList/load', async () => {
        if (state.graphql === undefined) {
          throw ("init not done");
        }
        const { data } = await state.graphql.query({ query: fullStateQuery });

        commit('applicationsLoaded', data.applications);
        commit('applicationProfilesLoaded', data.applicationProfiles);
        commit('topicsLoaded', data.topics)
        commit('sessionsLoaded', data.sessions)
      });
    },
    async refreshUsername({ state, dispatch, commit }) {
      return dispatch('username/load', async () => {
        const token = await dispatch('refreshToken', {}, { root: true });
        try {
          const info = await state.api.client.getAccountInformations(token);
          commit('usernameSet', info.usernames[0]);
        } catch (err) {
          const info = await state.api.client.createAccount(token);
          commit('usernameSet', info.usernames[0]);
        }
      });
    },
  },
  modules: {
    session,
    loader,
  }
})

setInterval(() => store.commit('timeTicked', new Date()), 5000);

export default store;