import Vue from 'vue'
import Vuex from 'vuex'
import {fetcher} from 'lib/fetcher.js'
import _ from 'lodash'
import TestComponent from './TestComponent.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    startingLinks: {},
    profileLinks: {},

    appModules: [{id:"home", name:"Homepage", sequence:0, structure:[{id:"home", name:"Home", content:TestComponent}]}],
    currentAppModuleId: "home",
    currentAppSubmoduleId: "home"
  },
  getters: {
    currentAppModule(state){
      return state.appModules.find(module => module.id == state.currentAppModuleId);
    },
    currentAppSubmodule(state, getters){
      if (state.currentAppSubmoduleId == null)
        return null;

      let submodulePaths = state.currentAppSubmoduleId.split("/");
      let searchPool = getters.currentAppModule.structure;
      let cur = null;
      for (let i = 0; i < submodulePaths.length; i++){
        cur = searchPool.find(submodule => submodule.id == submodulePaths[i]);
        searchPool = cur.children;
      }
      return cur;
    }
  },
  mutations: {
    updateStartingLinks(state, startingLinks){
      state.startingLinks = _.assign(state.startingLinks, startingLinks);
    },
    updateProfileLinks(state, profileLinks){
      let profileLinkObj = _.isArray(profileLinks) ?
        _.keyBy(profileLinks, 'rel'):
        profileLinks;
      state.profileLinks = _.assign(state.profileLinks, profileLinkObj);
    },

    registerAppModule(state, moduleInfo){
      state.appModules.push(moduleInfo);
      state.appModules = _.sortBy(state.appModules, ['sequence']);
    },
    changeAppModule(state, moduleId){
      state.currentAppModuleId = moduleId;
      //find the first submodule of current module
      let curMod = state.appModules.find(module => module.id == moduleId);
      let curMenu = curMod.structure[0];
      let submoduleId = curMenu.id;
      while (curMenu.children != null && curMenu.children.length > 0){
        curMenu = curMenu.children[0];
        submoduleId = submoduleId + "/" + curMenu.id;
      }
      state.currentAppSubmoduleId = submoduleId;
    },
    changeAppSubmodule(state, submoduleId){
      state.currentAppSubmoduleId = submoduleId;
    }
  },
  actions: {
    async fetchStartingLinks(context){
      let response = await fetcher.fetchJSON("/api");
      context.commit(mutations.UPDATE_STARTING_LINKS, response._links);
      if (context.state.startingLinks.profile) {
        context.dispatch(actions.FETCH_PROFILE_LINKS);
      }
    },
    async fetchProfileLinks(context){
      let profileHref = context.state.startingLinks.profile.href;
      let response = await fetcher.fetchJSON(profileHref);
      context.commit(mutations.UPDATE_PROFILE_LINKS, response._links);
    }
  }
})

export const mutations = {
  UPDATE_STARTING_LINKS: 'updateStartingLinks',
  UPDATE_PROFILE_LINKS: 'updateProfileLinks'
};

export const actions = {
  FETCH_STARTING_LINKS: 'fetchStartingLinks',
  FETCH_PROFILE_LINKS: 'fetchProfileLinks'
}

export {store as AppStore}
