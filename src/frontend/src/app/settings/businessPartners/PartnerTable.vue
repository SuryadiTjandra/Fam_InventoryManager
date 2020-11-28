<template>
  <BaseTable
</template>

<script>
import BaseTable from 'components/table/BaseTable.vue';
import {mapState, mapGetters} from 'vuex';

export default {
  props: {
    appModuleId: String,
  },
  computed: {
    ...mapState(this.appModuleId, [''])
    ...mapGetters(this.appModuleId, ['usePaging, pageInfo']);
  }
}
</script>
