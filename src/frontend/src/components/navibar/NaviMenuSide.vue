<template >
  <v-list nav dense>
    <NaviMenuItem v-for="menu in menuStructure" :key="menu.id"
      :name="menu.name"
      :id="menu.id"
      :children="menu.children"
      :depth="0"
      @navi-click="$listeners['navi-click']"/>
  </v-list>
</template>

<script>
import NaviMenuItem from './NaviMenuItem.vue'

export default{
  components: {NaviMenuItem},
  props: {
    menuStructure: Array
  }
}
</script>
