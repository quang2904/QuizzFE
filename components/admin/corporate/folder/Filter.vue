<template>
  <div class="flex gap-2">
    <a-input
      placeholder="Search of folder"
      v-model:value="folder.search"
      @input="onSearch"
    />
    <a-button type="primary" :icon="h(PlusOutlined)">New Folder</a-button>
  </div>
</template>
<script lang="ts" setup>
import { debounce } from 'lodash'
import { PlusOutlined } from '@ant-design/icons-vue'

const corporate = useCorporate()
const { folder } = storeToRefs(corporate)

const onSearch = debounce((value: number) => {
  console.log('search', value)
}, 200)
</script>
