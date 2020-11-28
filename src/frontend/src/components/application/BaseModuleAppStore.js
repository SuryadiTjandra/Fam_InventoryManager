import {fetcher} from 'lib/fetcher.js';
import uriTemplates from 'uri-templates';

export default class BaseModuleAppStore {
  constructor(moduleId, apiLink, profileLink){
    this.moduleId = moduleId;
    this.apiLink = apiLink;
    this.profileLink = profileLink;
  }

  state(){
    return {
      moduleId: this.moduleId,
      apiLink: this.apiLink,
      profileLink: this.profileLink,

      selectedItem: null,
      //selectedItemModified: null,

      //cachedItems: [],
      listItems: [],
      page: 1,
      size: 1,
      totalSize: 1,
      totalPages: 1,
      sort: null
    }
  };

  getters(){
    return {
      usePaging: state => state.apiLink.templated == true,
      pageInfo: state => ({
        page: state.page,
        size: state.size,
        totalSize: state.totalSize,
        totalPages: state.totalPages,
        sort: state.sort
      })
    }
  };

  mutations(){
    return {
      selectItem(state, item){
        state.selectedItem = item;
      },
      deselectItem(state){
        state.selectedItem = null;
      },
      updateListItems(state, listItems){
        state.listItems = listItems;
      },
      updatePageInfo(state, {number, size, totalElements, totalPages, sort}){
        state.page = number;
        state.size = size;
        state.totalSize = totalElements;
        state.totalPages = totalPages;
        state.sort = sort;
      }
    }
  };

  actions(){
    return {
      async fetchListItems(context, pagingSortingInfo){
        let url = context.state.apiLink.href;
        if (context.getters.usePaging){
          url = uriTemplates(url).fill(pagingSortingInfo);
        }
        let result = await fetcher.fetchJSON(url);
        context.commit('updateListItems', result._embedded[context.state.moduleId]);
        if (context.getters.usePaging){
          context.commit('updatePageInfo', result.page);
        }
      }
    }
  };

  modules(){
    return {}
  };

  getModule(){
    return {
      namespaced: true,
      state: this.state(),
      getters: this.getters(),
      mutations: this.mutations(),
      actions: this.actions(),
      modules: this.modules()
    }
  }
}
