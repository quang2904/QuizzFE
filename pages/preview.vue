<template>
  <a-layout-header
    class="flex items-center justify-between gap-4 bg-white shadow"
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
  <div>
    <div class="rounded-lg border px-4 py-4">
      <div class="relative">
        <Editor
          v-model="value"
          class="h-44 h-64 rounded-lg border px-10 py-10"
        />
        <a-button
          size="small"
          class="position-input"
          type="primary"
          :icon="h(BellOutlined)"
        />
      </div>
      <!-- <div class="flex">
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <a-button :icon="h(BellOutlined)" />
              <a-button :icon="h(BellOutlined)" />
            </div>
            <a-checkbox v-model:checked="checked">Checkbox</a-checkbox>
          </div>
          <div><a-input /></div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { BellOutlined, PlusOutlined } from '@ant-design/icons-vue'
import type { SelectProps } from 'ant-design-vue'
import { Editor } from '#components'

definePageMeta({
  layout: 'quizz',
})

const checked = ref(false)
const value = ref('lucy')
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

<style>
.position-input {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
}

.ant-layout-header {
  background: white !important;
}

.ant-layout-header {
  padding: 0 1.25rem !important;
}
</style>
