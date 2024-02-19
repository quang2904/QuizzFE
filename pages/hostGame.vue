<template>
  <HeadHost />
  <div class="layout-hostGame">
    <div class="flex justify-center gap-5">
      <div class="flex w-10 items-center">
        <div
          class="h-10 w-full rounded-full bg-green-300 text-center align-middle font-medium leading-10 text-white"
        >
          10
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
            v-for="(answer, index) in answers"
            :class="answer"
            :key="index"
          >
            <div class="flex w-full items-center justify-end px-2 pt-2">
              <a-checkbox v-model:checked="checked" />
            </div>
            <div
              class="answer--editor h-[200px] overflow-hidden px-2 py-2"
              v-html="answer1"
            />
          </div>
        </div>
      </div>
      <div class="flex w-10 items-center">
        <div
          class="h-10 w-full rounded-full bg-green-300 text-center align-middle font-medium leading-10 text-white"
        >
          10
        </div>
      </div>
    </div>
  </div>
  <div class="flex h-16 items-center justify-end bg-white px-5">
    <h1 class="my-0">1 / 8</h1>
  </div>
</template>
<script lang="ts" setup>
import { HeadHost } from '#components'

definePageMeta({
  layout: 'quizz',
})

const checked = ref(true)

const question = ref("<h1 class='text-center font-medium mt-5'>Math</h1>")
const answer1 = ref("<p class='text-center text-white font-medium'>123</p>")

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
