<template>
  <a-layout-header
    class="flex items-center justify-between gap-4 border bg-white shadow"
  >
    <div class="flex items-center gap-2">
      <a-button :icon="h(PlusOutlined)"></a-button>
      <a-select
        v-model:value="value1"
        class="w-32"
        :options="options1"
        @change="handleChange"
      />
    </div>
    <div class="flex gap-2">
      <a-select
        v-model:value="value1"
        class="w-32"
        :options="options1"
        @change="handleChange"
      >
        <template #suffixIcon
          ><smile-outlined class="ant-select-suffix"
        /></template>
      </a-select>
      <a-select
        v-model:value="value1"
        class="w-32"
        :options="options1"
        @change="handleChange"
      >
        <template #suffixIcon
          ><smile-outlined class="ant-select-suffix"
        /></template>
      </a-select>
      <a-button :icon="h(BellOutlined)">Gắn thẻ chủ đề</a-button>
      <a-button :icon="h(BellOutlined)" type="primary">Lưu câu hỏi</a-button>
    </div>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { BellOutlined, PlusOutlined } from '@ant-design/icons-vue'
import type { SelectProps } from 'ant-design-vue'
const value1 = ref('lucy')
const options1 = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'disabled',
    label: 'Disabled',
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe',
  },
])

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}
</script>
            