<template>
  <!--<ul>
    <li v-for="menu in sortedMenuStructure" :key="menu.text">
      <NaviMenuItem
        :text="menu.text"
        :value="menu.value"
        @navi-click="onNaviClick"/>
    </li>
  </ul>-->
  <v-toolbar dense>
    <v-toolbar-items>
      <NaviMenuTopButton v-for="menu in menus" :key="menu.id"
        :name="menu.name"
        :id="menu.id"
        @navi-click="$listeners['navi-click']"/>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import sortBy from 'lodash/sortBy';
import NaviMenuItem from "./NaviMenuItem.vue";
import NaviMenuTopButton from "./NaviMenuTopButton.vue";

export default {
  props: {
    menus: Array
  },
  components: {NaviMenuItem, NaviMenuTopButton},
  methods: {
    onNaviClick(naviValue){
      alert(naviValue);
      this.$emit('navi-click', naviValue);
    }
  }
}
</script>
