<template>
  <!--<div>
    <input type="button" @click="onButtonClick" :value="text.concat(' &gt;')"></input>
    <ul v-show="showList">
      <li v-for="child in sortedChildren" :key="child.text">
        <NaviMenuItem
          :text="child.text"
          :value="child.value"
          @navi-click="onNaviClick" />
      </li>
    </ul>
  </div>-->
  <v-list-group :sub-group="depth > 0" no-action dense>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{name}}</v-list-item-title>
      </v-list-item-content>
    </template>

    <NaviMenuItem v-for="menu in sortedChildren" :key="menu.id"
      :name="menu.name"
      :id="menu.id"
      :children="menu.children"
      :depth="depth + 1"
      @navi-click="onNaviClick"/>
  </v-list-group>
</template>

<script>
//import NaviMenuItem from "./NaviMenuItem.vue";
import sortBy from "lodash/sortBy";

export default {
  name: "NaviMenuDropdown",
  components: { NaviMenuItem: () => import("./NaviMenuItem.vue") },
  props: {
    name: String,
    id: String,
    children: Array,
    depth: Number
  },
  computed: {
    sortedChildren(){
      return sortBy(this.children, ['sequence']);
    }
  },
  methods: {
    onNaviClick(naviId){
      this.$emit('navi-click', this.id + "/" + naviId);
    }
  }
}
</script>
