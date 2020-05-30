import Authenticator from '@/store/services/auth.service'
import { domain, clientId } from "../../../auth_config.json";
import { ActionContext, ActionTree, Module } from 'vuex';

const auth = new Authenticator(domain, clientId)

class SessionState {
  authenticated = false;
  authenticationPending = true;
  lastPath?: string;
  profile?: any;
}


const authModule: Module<any, any> = {
  state: new SessionState(),
  getters: {
    authenticated(state) {
      return state.authenticated
    },
    authenticationPending(state) {
      return state.authenticationPending
    },
    lastPath(state: SessionState) {
      return state.lastPath;
    },
    profile(state: SessionState) { return state.profile },
  },
  mutations: {
    authenticationPending(state: SessionState) {
      state.authenticationPending = true;
    },
    appStateRecovered(state: SessionState, appState: any) {
      state.lastPath = appState;
    },
    profileFetched(state: SessionState, profile: any) {
      state.profile = profile;
      state.authenticated = true;
      state.authenticationPending = false;
    },
    logout(state: SessionState) {
      state.authenticated = false
    }
  },
  actions: {
    toogleAuthentication({ state, dispatch }) {
      if (state.authenticated) {
        return dispatch('logout');
      } else {
        return dispatch('login');
      }
    },
    async login(context, appState?: string) {
      return auth.login(appState);
    },
    logout({ commit }) {
      auth.logout();
      commit('logout')
    },
    async refreshToken() {
      return auth.token();
    },
    async handleAuthentication({ commit }) {
      commit('authenticationPending');
      const appState = await auth.handleAuthentication();
      const profile = await auth.userProfile();
      if (appState !== undefined) {
        commit('appStateRecovered', appState);
      }
      commit('profileFetched', profile);
    }
  }
}

export default authModule;