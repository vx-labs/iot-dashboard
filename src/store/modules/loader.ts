import { Module } from 'vuex';
class LoaderState {
  pending = false;
  failureReason = '';
}

const NewLoaderModule = (): Module<any, any> => ({
  namespaced: true,
  state: new LoaderState(),
  getters: {
    isPending(state: LoaderState) { return state.pending },
    hasFailed(state: LoaderState) { return state.failureReason !== '' },
    failureReason(state: LoaderState) { return state.failureReason }
  },
  mutations: {
    loading(state: LoaderState) { state.pending = true },
    loaded(state: LoaderState) { state.pending = false; state.failureReason = '' },
    failed(state: LoaderState, reason: string) { state.pending = false; state.failureReason = reason },
  },
  actions: {
    async load({ commit }, loader: () => Promise<void>) {
      commit('loading')
      try {
        await loader();
        commit('loaded')
      } catch (err) {
        commit('failed', err)
      }
    }
  },
})


const Loaders: Module<any, any> = {
  modules: {
    'deviceList': NewLoaderModule(),
    'topicList': NewLoaderModule(),
    'topicRecords': NewLoaderModule(),
    'eventList': NewLoaderModule(),
    'username': NewLoaderModule(),
    'mqtt': NewLoaderModule(),
  }
}
export default Loaders;