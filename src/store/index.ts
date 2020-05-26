import Vue from 'vue'
import Vuex from 'vuex'
import { Device, MainState } from './types'

import session from './modules/session'


Vue.use(Vuex)

export default new Vuex.Store({
  state: new MainState(),
  getters: {
    owner(state) { return state.resources.owner },
    devices(state) { return state.resources.devices },
  },
  mutations: {
    devicesLoaded(state, devices: Device[]) {
      state.resources.devices = devices;
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
    }
  },
  actions: {
    async refreshDevices({ state, dispatch, commit }) {
      const token = await dispatch('refreshToken', {}, { root: true });
      const devices = await state.api.client.listDevices(token)
      commit('devicesLoaded', devices)
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
