import Vue from 'vue'
import Vuex from 'vuex'
import { Device, MainState, Topic } from './types'

import session from './modules/session'


Vue.use(Vuex)

export default new Vuex.Store({
  state: new MainState(),
  getters: {
    owner(state) { return state.resources.owner },
    devices(state) { return state.resources.devices },
    topics(state) { return state.resources.topics },
    selectedTopic(state) { return state.resources.selectedTopic },
    selectedTopicRecords(state) { return state.resources.selectedTopicRecords },
    areTopicsLoading(state) { return state.resources.loadingTopicList },
    isSelectedTopicRecordsLoading(state) { return state.resources.loadingSelectedTopic },
  },
  mutations: {
    devicesLoaded(state, devices: Device[]) {
      state.resources.devices = devices;
    },
    topicsLoading(state) {
      state.resources.loadingTopicList = true;
    },
    topicsLoaded(state, topics: Topic[]) {
      state.resources.topics = topics;
      state.resources.loadingTopicList = false;
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
    selectedTopicRecordsLoading(state) {
      state.resources.loadingSelectedTopic = true;
    },
    selectedTopicRecordsFetched(state, { records }) {
      state.resources.selectedTopicRecords = records;
      state.resources.loadingSelectedTopic = false;
    },
  },
  actions: {
    async refreshSelectedTopicRecords({ state, dispatch, commit }) {
      commit('selectedTopicRecordsLoading');
      const token = await dispatch('refreshToken', {}, { root: true });
      const records = await state.api.client.getTopic(token, state.resources.selectedTopic);
      commit('selectedTopicRecordsFetched', { records });
    },
    async selectTopic({ dispatch, commit }, topic: string) {
      commit('topicSelected', { topic });
      await dispatch('refreshSelectedTopicRecords');
    },
    async refreshDevices({ state, dispatch, commit }) {
      const token = await dispatch('refreshToken', {}, { root: true });
      const devices = await state.api.client.listDevices(token)
      commit('devicesLoaded', devices)
    },
    async refreshTopics({ state, dispatch, commit }) {
      commit('topicsLoading');
      const token = await dispatch('refreshToken', {}, { root: true });
      const devices = await state.api.client.listTopics(token)
      commit('topicsLoaded', devices)
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
    }
  },
  modules: {
    session,
  }
})
