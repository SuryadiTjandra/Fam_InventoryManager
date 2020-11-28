<template>
  <div>
    <!--display list of items, default is just a list of the item as strings with a select button-->
    <slot name="listView" v-if="$store.state[this.moduleId].selectedItem == null"
      :listItems="$store.state[this.moduleId].listItems"
      :usePaging="$store.getters[this.moduleId + '/usePaging']"
      :pageInfo="$store.getters[this.moduleId + '/pageInfo']"
      :onSelectItem="onSelectItem"
      :onUpdatePageInfo="onUpdatePageInfo"
      :onCreateItem="onCreateItem">
      <ul>
        <li v-for="item in $store.state[this.moduleId].listItems" :key="item._links.self.href">
          <div>{{item}}</div>
          <button @click="onSelectItem(item)">SELECT</button>
        </li>
      </ul>
    </slot>
    <!--display form of individual item, default is just uneditable string of the item with a deselect button-->
    <slot name="formView" v-else
      :selectedItem="$store.state[this.moduleId].selectedItem"
      :onDeselectItem="onDeselectItem">
      <div>
        {{JSON.stringify($store.state[this.moduleId].selectedItem, null, 4)}}
        <button @click="onDeselectItem">RETURN</button>
      </div>
    </slot>
  </div>
</template>

<script>
import fetcher from 'lib/fetcher.js'

export default {
  props: {
    moduleId: String,
    moduleStore: {
      type: Object,
      validator(value){
        return value["state"] && value["getters"] && value["mutations"] && value["actions"];
      }
    },
    defaultPagination:{
      type: Object,
      required: false,
      default: () => ({
        size: 20,
        page: 1
      })
    }
  },
  methods: {
    onSelectItem(item){
      this.$store.commit(this.moduleId + "/selectItem", item);
    },
    onDeselectItem(){
      this.$store.commit(this.moduleId + "/deselectItem");
    },
    onUpdatePageInfo(pageInfo){
      this.$store.dispatch(this.moduleId + "/fetchListItems", pageInfo);
    },
    onCreateItem(){
      alert("createitem");
    }
  },
  created: function(){
    this.$store.registerModule(this.moduleId, this.moduleStore);
  },
  beforeDestroy: function(){
    this.$store.unregisterModule(this.moduleId);
  },
  mounted: async function(){
    this.$store.dispatch(this.moduleId + "/fetchListItems", this.defaultPagination);
  }
}
</script>
