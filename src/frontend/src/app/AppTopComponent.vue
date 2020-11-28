<template>
  <v-app>

    <v-app-bar app dense clipped-left>
      <v-toolbar-title>{{$store.getters.currentAppModule.name}}</v-toolbar-title>
      <template v-slot:extension>
        <NaviMenuTop :menus="$store.state.appModules" @navi-click="onNaviClick"/>
      </template>
    </v-app-bar>

    <v-navigation-drawer app clipped>
      <NaviMenuSide :menuStructure="$store.getters.currentAppModule.structure" @navi-click="onSubNaviClick"/>
    </v-navigation-drawer>

    <v-content>
      <keep-alive>
        <component v-if="$store.getters.currentAppSubmodule.content" keep-alive
          :is="$store.getters.currentAppSubmodule.content"
          :appModuleId="$store.state.currentAppSubmoduleId">
        </component>
      </keep-alive>
      <div v-else>
        Error. No Content Associated for {{$store.state.currentAppSubmoduleId}}
      </div>
    </v-content>
  </v-app>
</template>

<script>
import NaviMenuTop from "components/navibar/NaviMenuTop.vue";
import NaviMenuSide from "components/navibar/NaviMenuSide.vue";
import Settings from "./settings/SettingsMenuStructure.js";

export default {
  props: ['links'],
  components: {NaviMenuTop, NaviMenuSide},
  /*data(){
    return {
      //links: this.links,
      module1: {
        id: "M1",
        name: "MODULE1",
        sequence: 10,
        structure: [
          {name: "test", id: "TEST1", sequence: 1},
          {name: "test2", id: "TEST2", sequence: 2, children: [
            {name: "test2a", sequence: 10, id: "TEST2A"},
            {name: "test2b", id: "TEST2B", sequence: 1, children: [
              {name: "test2bx", id: "TEST2BX"}
            ]}
          ]}
        ]
      },
      module2: {
        id: "M2",
        name: "MODULE2",
        sequence: 20,
        structure: [
          {name: "qwerty", id: "QWERTY", sequence: 1},
          {name: "qwerty2", id: "QWERTY2", sequence: 2, children: [
            {name: "qwerty2a", sequence: 10, id: "ASDFGHJ"},
            {name: "qwerty2b", id: "POIUYT", sequence: 1, children: [
              {name: "qwerty2c", id: "ZXCVBNM"}
            ]}
          ]}
        ]
      }
    }
  },*/
  computed: {
    currentApp: function(){
      return this.$store.state.currentAppModule;
    }
  },
  methods: {
    onNaviClick(moduleId){
      this.$store.commit("changeAppModule", moduleId);
    },
    onSubNaviClick(submoduleId){
      this.$store.commit("changeAppSubmodule", submoduleId);
    }
  },
  created(){
    //this.$store.commit("registerAppModule", this.module1);
    //this.$store.commit("registerAppModule", this.module2);
    this.$store.commit("registerAppModule", Settings);
  }
}
</script>
