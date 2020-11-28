<template>
  <v-list-item @click="onClick" dense>
    <v-list-item-content>
      <v-list-item-title>{{name}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default{
  props: {
    name: String,
    id: String
  },
  methods:{
    onClick(){
      this.$emit('navi-click', this.id)
    }
  }
}
</script>
