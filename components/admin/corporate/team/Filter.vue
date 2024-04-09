<template>
  <div class="flex gap-2">
    <a-input
      placeholder="Search of team"
      v-model:value="team.search"
      @input="onSearch"
    />
    <a-button type="primary" :icon="h(PlusOutlined)">New Team</a-button>
  </div>
</template>
<script lang="ts" setup>
import { debounce } from 'lodash'
import { PlusOutlined } from '@ant-design/icons-vue'

const corporate = useCorporate()
const { team } = storeToRefs(corporate)

const onSearch = debounce((value: number) => {
  console.log('search', value)
}, 200)
</script>
