<template>
  <BaseModuleApp :moduleId="appModuleId" :moduleStore="store">
    <template v-slot:listView="slotProps">
      <BaseTable
        :items="slotProps.listItems"
        :usePaging="slotProps.usePaging"
        :pageInfo="slotProps.pageInfo"
        :headers="tableHeaders"
        @select-item="slotProps.onSelectItem"
        @create-item="slotProps.onCreateItem"
        @update-page-info="slotProps.onUpdatePageInfo">
      </BaseTable>
    </template>
  </BaseModuleApp>
</template>

<script>
import BaseModuleApp from "components/application/BaseModuleApp.vue";
import BaseModuleAppStore from "components/application/BaseModuleAppStore.js";
import BaseTable from "components/table/BaseTable.vue"

export default {
  components: {BaseModuleApp, BaseTable},
  props: {
    appModuleId: String
  },
  data: function(){
    return {
      store: new BaseModuleAppStore(
              this.appModuleId,
              this.$store.state.startingLinks[this.appModuleId],
              this.$store.state.profileLinks[this.appModuleId]
            ).getModule(),
      tableHeaders: [
        {text: 'Name', value:'name'},
        {text:'Address', value:'address'}
      ]
    }
  }
}
</script>
