<template>
  <div class="flex gap-2">
    <a-input
      placeholder="Search of team"
      v-model:value="search"
      @input="onSearch"
    />
    <a-button type="primary" :icon="h(PlusOutlined)">New Team</a-button>
  </div>
</template>
<script lang="ts" setup>
import { debounce } from 'lodash'
import { PlusOutlined } from '@ant-design/icons-vue'

const search = ref<string>('')

const onSearch = debounce((value: number) => {
  console.log('search', value)
}, 200)
</script>
