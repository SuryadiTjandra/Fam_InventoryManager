<template>
  <v-data-table
    :headers="headers"
    item-key="_links.self.href"
    :items="items"
    :disablePagination="!usePaging"
    :disableSort="!usePaging"
    :server-item-length="usePaging ? pageInfo.totalSize : -1 /*only use when there are multiple pages*/ "
    :page="usePaging ? pageInfo.page: 1"
    :itemsPerPage="usePaging ? pageInfo.size: 20"
    :sortBy="usePaging && pageInfo.sort ? pageInfo.sort.split(',')[0] : 'name'"
    :sortDesc="usePaging && pageInfo.sort ? pageInfo.sort.split(',')[1] == 'desc' : false"
    @update:options="usePaging ?
      $emit('update-page-info', {
        page: $event.page,
        size: $event.itemsPerPage,
        sort: $event.sortBy + ',' + ($event.sortDesc == true ? 'desc':'asc')
      })
      :
      () => ({})"
    @click:row="$emit('select-item', $event)"
    >

    <template v-slot:top>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="$emit('create-item')">
          <v-icon>mdi-plus</v-icon>
          NEW
        </v-btn>
      </v-toolbar>
    </template>

  </v-data-table>
</template>

<script>
export default {
  props: {
    headers: Array,
    items: Array,
    usePaging: Boolean,
    pageInfo: {
      type: Object,
      validator: value => value["size"] != null && value["page"] != null && value["totalSize"] != null && value["totalPages"] != null,
      required: false
    }
  }
}
</script>
