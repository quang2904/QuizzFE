<template>
  <HeadHost />
  <!-- Host -->
  <div class="layout-hostGame">
    <div class="flex justify-end gap-3">
      <a-button type="primary" @click="handleStop">Stop</a-button>
      <a-button type="primary" @click="handleNext">Next</a-button>
    </div>
    <div class="flex justify-center gap-5">
      <div class="flex w-10 items-center">
        <div
          class="h-10 w-full rounded-full bg-green-300 text-center align-middle font-medium leading-10 text-white"
        >
          {{ score }}
        </div>
      </div>
      <div class="mt-10 flex flex-col">
        <div class="shadow-md">
          <div
            class="question--editor h-[400px] w-[800px] overflow-hidden rounded-lg bg-white px-8 py-8"
            v-html="question"
          />
        </div>

        <div class="mt-5 flex w-[800px] gap-3">
          <div
            class="flex-1 overflow-hidden rounded-lg shadow-md"
            v-for="(item, index) in answers"
            :class="bgAnswers[index]"
            :key="item.value"
          >
            <!-- opacity-50 -->
            <div class="flex w-full items-center justify-end px-2 pt-2">
              <a-checkbox
                :checked="answerValue === item.value"
                :readonly="true"
              />
            </div>
            <div
              class="answer--editor h-[200px] overflow-hidden px-2 py-2"
              v-html="item.content"
            />
          </div>
        </div>
      </div>
      <div class="flex w-10 items-center">
        <div
          class="h-10 w-full rounded-full bg-green-300 text-center align-middle font-medium leading-10 text-white"
        >
          {{ time }}
        </div>
      </div>
    </div>
  </div>
  <div class="flex h-16 items-center justify-end bg-white px-5">
    <h1 class="my-0">{{ page }} / {{ totalPage }}</h1>
  </div>
  <!-- Statistic -->
  <!-- <div class="mt-10 text-center">
    <div class="mb-5">Top Win</div>
    <div v-for="item in [1, 2, 3]" :key="item">
      <h1>name : {{ item }}</h1>
    </div>
  </div> -->
</template>
<script lang="ts" setup>
import { HeadHost } from '#components'

definePageMeta({
  layout: 'quizz',
})

interface Answer {
  content: string
  value: number
}

const time = ref<Number>(10)
const score = ref<Number>(5)
const page = ref<Number>(1)
const totalPage = ref<Number>(8)
const question = ref<String>('1')
const answers = ref<Answer[]>([])
const answerValue = ref<Number>(0)
const bgAnswers = ref<String[]>([
  'answer--bg-1',
  'answer--bg-2',
  'answer--bg-3',
  'answer--bg-4',
  'answer--bg-5',
])

const handleStop = () => {}
const handleNext = () => {}
</script>
<style scoped>
.question--pos {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 999;
}
</style>
