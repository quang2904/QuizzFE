<template>
  <div class="flex gap-2">
    <a-input
      placeholder="Search any content"
      v-model:value="content.search"
      @input="onSearch"
    />
    <a-select
      v-model:value="content.filterId"
      style="width: 120px"
      @change="onFilter"
      :options="LIST_FILTER"
    />
    <a-select
      v-model:value="content.sortId"
      style="width: 120px"
      @change="onSort"
      :options="LIST_SORT"
    />
  </div>
</template>
<script lang="ts" setup>
import { LIST_FILTER, LIST_SORT } from '@/constants/corporate'
import { debounce } from 'lodash'

const corporate = useCorporate()
const { content } = storeToRefs(corporate)

const onSearch = debounce((value: number) => {
  console.log('search', value)
}, 200)
const onFilter = (value: number) => {
  console.log('filter', value)
}
const onSort = (value: number) => {
  console.log('sort', value)
}
</script>
