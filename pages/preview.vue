<template>
  <HeadPreview />
  <div class="layout-preview flex flex-col items-center">
    <div class="mt-5 flex w-full justify-between px-2">
      <a-radio-group v-model="value2" button-style="solid">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b">Shanghai</a-radio-button>
      </a-radio-group>
      <a-button>Thêm giải thích cho đáp án</a-button>
    </div>
    <div class="relative mt-5 shadow-md">
      <Editor
        v-model="value"
        class="question--editor h-[400px] w-[800px] overflow-hidden rounded-lg bg-white px-8 py-8"
      />
      <a-button
        size="small"
        class="question--pos"
        type="primary"
        :icon="h(BellOutlined)"
      />
    </div>

    <div class="mt-5 flex w-[800px] gap-3">
      <div
        class="flex-1 overflow-hidden rounded-lg shadow-md"
        v-for="(answer, index) in answers"
        :class="answer"
        :key="index"
      >
        <div class="flex w-full items-center justify-between px-2 pt-2">
          <div class="flex items-center gap-2">
            <a-button :icon="h(BellOutlined)" />
            <a-button :icon="h(BellOutlined)" />
          </div>
          <a-checkbox v-model:checked="checked" />
        </div>
        <Editor class="answer--editor h-[200px] overflow-hidden px-2 py-2" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { BellOutlined } from '@ant-design/icons-vue'
import { Editor, HeadPreview } from '#components'

definePageMeta({
  layout: 'quizz',
})

const checked = ref(false)
const value = ref('lucy')
const value2 = ref<string>('a')

const answers = ref<String[]>([
  'answer--bg-1',
  'answer--bg-2',
  'answer--bg-3',
  'answer--bg-4',
  // 'answer--bg-5',
])
</script>
<style scoped>
.question--pos {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 999;
}
</style>
