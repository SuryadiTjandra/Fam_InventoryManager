<template>
  <!--<input type="button" @click.prevent.stop="onClick" :value="text"/>-->
  <v-btn text  @click="onClick">
    {{name}}
  </v-btn>
</template>

<script>
export default {
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
