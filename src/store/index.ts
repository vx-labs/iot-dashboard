import Vue from 'vue'
import Vuex from 'vuex'
import { Device, MainState, Topic, Event, CreateDeviceRequest } from './types'

import session from './modules/session'
import loader from './modules/loader'
import NewMQTTModule from './modules/mqtt'


Vue.use(Vuex)

const maxEvents = 500;

export default new Vuex.Store({
  state: new MainState(),
  getters: {
    owner(state) { return state.resources.owner },
    devices(state) { return state.resources.devices },
    topics(state) { return state.resources.topics; },
    events(state) { return state.resources.events; },
    selectedTopic(state) { return state.resources.selectedTopic },
    selectedTopicRecords(state) { return state.resources.selectedTopicRecords },
    areTopicsLoading(state, getters) { return getters['topicList/isPending'] },
    areDevicesLoading(state, getters) { return getters['deviceList/isPending'] },
    areEventsLoading(state, getters) { return getters['eventList/isPending'] },
    isSelectedTopicRecordsLoading(state, getters) { return getters['topicRecords/isPending'] },
  },
  mutations: {
    devicesLoaded(state, devices: Device[]) {
      state.resources.devices = devices;
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
    deviceDeleted(state, id: string) {
      state.resources.devices = state.resources.devices.filter(elt => elt.id !== id);
    },
    deviceEnabled(state, id: string) {
      const idx = state.resources.devices.findIndex(elt => elt.id === id);
      if (idx > -1) {
        Vue.set(state.resources.devices, idx, Object.assign({}, state.resources.devices[idx], { active: true }))
      }
    },
    deviceConnected(state, id: string) {
      const idx = state.resources.devices.findIndex(elt => elt.id === id);
      if (idx > -1) {
        Vue.set(state.resources.devices, idx, Object.assign({}, state.resources.devices[idx], { connected: true }))
      }
    },
    deviceSubscribed(state, id: string) {
      const idx = state.resources.devices.findIndex(elt => elt.id === id);
      if (idx > -1) {
        Vue.set(state.resources.devices, idx, Object.assign({}, state.resources.devices[idx], { subscriptionCount: state.resources.devices[idx].subscriptionCount + 1 }))
      }
    },
    deviceUnsubscribed(state, id: string) {
      const idx = state.resources.devices.findIndex(elt => elt.id === id);
      if (idx > -1) {
        Vue.set(state.resources.devices, idx, Object.assign({}, state.resources.devices[idx], { subscriptionCount: state.resources.devices[idx].subscriptionCount - 1 }))
      }
    },
    deviceDisconnected(state, id: string) {
      const idx = state.resources.devices.findIndex(elt => elt.id === id);
      if (idx > -1) {
        Vue.set(state.resources.devices, idx, Object.assign({}, state.resources.devices[idx], { connected: false }))
      }
    },
    deviceDisabled(state, id: string) {
      const idx = state.resources.devices.findIndex(elt => elt.id === id);
      if (idx > -1) {
        Vue.set(state.resources.devices, idx, Object.assign({}, state.resources.devices[idx], { active: false }))
      }
    },
    devicePasswordChanged(state, { id, password }) {
      const idx = state.resources.devices.findIndex(elt => elt.id === id);
      if (idx > -1) {
        Vue.set(state.resources.devices, idx, Object.assign({}, state.resources.devices[idx], { password }))
      }
    },
    topicSelected(state, { topic }) {
      state.resources.selectedTopic = topic;
      state.resources.selectedTopicRecords = [];
    },
    selectedTopicRecordsFetched(state, { records }) {
      state.resources.selectedTopicRecords = records;
    },
  },
  actions: {
    async refreshSelectedTopicRecords({ state, dispatch, commit }) {
      return dispatch('topicRecords/load', async () => {
        const token = await dispatch('refreshToken', {}, { root: true });
        const records = await state.api.client.getTopic(token, state.resources.selectedTopic);
        commit('selectedTopicRecordsFetched', { records });
      });
    },
    async selectTopic({ dispatch, commit }, topic: string) {
      commit('topicSelected', { topic });
      await dispatch('refreshSelectedTopicRecords');
    },
    async refreshDevices({ state, dispatch, commit }) {
      return dispatch('deviceList/load', async () => {
        const token = await dispatch('refreshToken', {}, { root: true });
        const devices = await state.api.client.listDevices(token);
        commit('devicesLoaded', devices)
      });
    },
    async refreshTopics({ state, dispatch, commit }) {
      return dispatch('topicList/load', async () => {
        const token = await dispatch('refreshToken', {}, { root: true });
        const devices = await state.api.client.listTopics(token)
        commit('topicsLoaded', devices)
      });
    },
    async createDevice({ state, dispatch }, input: CreateDeviceRequest) {
      const token = await dispatch('refreshToken', {}, { root: true });
      await state.api.client.createDevice(token, input);
    },
    async deleteDevice({ commit, state, dispatch }, id: string) {
      const token = await dispatch('refreshToken', {}, { root: true });
      await state.api.client.deleteDevice(token, id)
      commit('deviceDeleted', id);
    },
    async enableDevice({ commit, state, dispatch }, id: string) {
      const token = await dispatch('refreshToken', {}, { root: true });
      await state.api.client.enableDevice(token, id)
      commit('deviceEnabled', id);
    },
    async disableDevice({ commit, state, dispatch }, id: string) {
      const token = await dispatch('refreshToken', {}, { root: true });
      await state.api.client.disableDevice(token, id)
      commit('deviceDisabled', id);
    },
    async changeDevicePassword({ commit }, { id, password }) {
      commit('devicePasswordChanged', { id, password });
    },
    async refreshEvents({ state, dispatch, commit }) {
      return dispatch('eventList/load', async () => {
        const token = await dispatch('refreshToken', {}, { root: true });
        const events = await state.api.client.getEvents(token)
        commit('eventsLoaded', events)
      });
    },
  },
  modules: {
    session,
    loader,
    mqtt: NewMQTTModule(),
  }
})
