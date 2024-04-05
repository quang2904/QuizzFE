<template>
  <div class="flex gap-2">
    <a-input
      placeholder="Search any content"
      v-model:value="search"
      @input="onSearch"
    />
    <a-select
      v-model:value="filter"
      style="width: 120px"
      @change="onFilter"
      :options="LIST_FILTER"
    />
    <a-select
      v-model:value="sort"
      style="width: 120px"
      @change="onSort"
      :options="LIST_SORT"
    />
  </div>
</template>
<script lang="ts" setup>
import { LIST_FILTER, LIST_SORT } from '@/constants/corporate'
import { debounce } from 'lodash'

const search = ref()
const filter = ref()
const sort = ref()

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
