<template>
  <Filter class="mb-2 mt-4" />
  <CardFolder v-for="item in folder.list" :key="item.id" class="mb-2" />
</template>
<script lang="ts" setup>
import CardFolder from '@/components/admin/corporate/folder/CardFolder.vue'
import Filter from '@/components/admin/corporate/folder/Filter.vue'

const corporate = useCorporate()
const { folder } = storeToRefs(corporate)
</script>
