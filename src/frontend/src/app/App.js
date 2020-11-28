import Vue from 'vue'
import TestComponent from './TestComponent.vue'
import {AppStore, mutations, actions} from './AppStore.js'
import AppTopComponent from "./AppTopComponent.vue"
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const vm = new Vue({
    el: '#app',
    store: AppStore,
    vuetify: new Vuetify({}),
    //data: {text: 'YOOOOOOO'},
    components: {AppTopComponent},
    //template: "<div>{{text}}</div>",
    render(h) {
        return h("AppTopComponent")
    },
    created(){
      this.$store.dispatch(actions.FETCH_STARTING_LINKS)
    }
    //created(){ alert("aaaa")}
})
