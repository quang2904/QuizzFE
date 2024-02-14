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
  <div class="layout-preview flex flex-col items-center">
    <div class="mt-5 flex w-full justify-between px-2">
      <a-radio-group v-model:value="value2" button-style="solid">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b">Shanghai</a-radio-button>
      </a-radio-group>
      <a-button>Thêm giải thích cho đáp án</a-button>
    </div>
    <div class="relative mt-5 shadow-md">
      <Editor
        v-model="value"
        class="question-editor h-[400px] w-[800px] overflow-hidden rounded-lg bg-white px-8 py-8"
      />
      <a-button
        size="small"
        class="pos-question"
        type="primary"
        :icon="h(BellOutlined)"
      />
    </div>

    <div class="mt-5 flex w-[800px] gap-3">
      <div
        class="bg-answer-1 flex-1 overflow-hidden rounded-lg shadow-md"
        v-for="answer in answers"
        :class="answer"
      >
        <div class="flex w-full items-center justify-between px-2 pt-2">
          <div class="flex items-center gap-2">
            <a-button :icon="h(BellOutlined)" />
            <a-button :icon="h(BellOutlined)" />
          </div>
          <a-checkbox v-model:checked="checked" />
        </div>
        <Editor class="answer-editor h-[200px] overflow-hidden px-2 py-2" />
      </div>
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
const value2 = ref<string>('a')
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

const answers = ref<String[]>([
  'bg-answer-1',
  'bg-answer-2',
  'bg-answer-3',
  'bg-answer-4',
  // 'bg-answer-5',
])

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}
</script>

<style>
.answer-editor::before {
  padding: 0 0.5rem;
}

.question-editor::before {
  padding: 0 2rem;
}

.bg-answer-1 {
  background: #2e72ab;
}
.bg-answer-2 {
  background: #319da5;
}
.bg-answer-3 {
  background: #eea73c;
}
.bg-answer-4 {
  background: #d4546d;
}
.bg-answer-5 {
  background: #994490;
}

.pos-question {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 999;
}

.pos-answer {
  position: absolute;
  top: 0.5rem;
  z-index: 999;
}

.ant-layout-header {
  background: white !important;
}

.ant-layout-header {
  padding: 0 1.25rem !important;
}
</style>
