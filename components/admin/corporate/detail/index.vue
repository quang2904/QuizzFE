<template>
  <Filter class="mb-2 mt-4" />
  <Card v-for="item in detail.list" :key="item.id" class="mb-2" />
</template>
<script lang="ts" setup>
import Card from '@/components/admin/corporate/common/Card.vue'
import Filter from '@/components/admin/corporate/detail/Filter.vue'

const corporate = useCorporate()
const { detail } = storeToRefs(corporate)
</script>
