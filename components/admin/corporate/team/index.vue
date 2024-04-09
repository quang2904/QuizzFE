<template>
  <Filter class="mb-2 mt-4" />
  <CardTeam v-for="item in team.list" :key="item.id" class="mb-2" />
</template>
<script lang="ts" setup>
import CardTeam from '@/components/admin/corporate/team/CardTeam.vue'
import Filter from '@/components/admin/corporate/team/Filter.vue'

const corporate = useCorporate()
const { team } = storeToRefs(corporate)
</script>
