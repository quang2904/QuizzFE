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
          {{ question.score }}
        </div>
      </div>
      <div class="mt-10 flex flex-col">
        <div class="shadow-md">
          <div
            class="question--editor h-[400px] w-[800px] overflow-hidden rounded-lg bg-white px-8 py-8"
            v-html="question.content"
          />
        </div>

        <div class="mt-5 flex w-[800px] gap-3">
          <div
            class="flex-1 overflow-hidden rounded-lg shadow-md"
            v-for="(item, index) in question.answers"
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
    <h1 class="my-0">{{ question.current }} / {{ question.total }}</h1>
  </div>
  <!-- Rank -->
  <div class="mt-10 text-center">
    <div class="mb-5">Top Win</div>
    <div v-for="item in rank" :key="item.id">
      <h1>name : {{ item.name }}</h1>
    </div>
  </div>

  <div class="mt-10 text-center">
    <h1 v-for="item in statistic" :key="item.value">
      {{ item.value }} : {{ item.percent }}
    </h1>
  </div>
  <!-- chuyển màn -->
  <a-button>Next</a-button>
</template>
<script lang="ts" setup>
import { HeadHost } from '#components'
import type { Socket } from 'socket.io-client'

definePageMeta({
  layout: 'quizz',
})

interface IAnswer {
  content: string
  value: number
}

interface IQuestion {
  content: string
  answers: IAnswer[]
  time: number
  total: number
  current: number
  score: number
}

interface IRank {
  id: number
  name: string
  score: number
}
interface IStatistic {
  id: number
  content: string
  value: number
  percent: number
}

const { $io }: { $io: Socket } = useNuxtApp()
const route = useRoute()
const time = ref<number>(0)
const answerValue = ref<number>(0)
const question = ref<IQuestion>()
const rank = ref<IRank[]>()
const statistic = ref<IStatistic[]>()
const bgAnswers = ref<string[]>([
  'answer--bg-1',
  'answer--bg-2',
  'answer--bg-3',
  'answer--bg-4',
  'answer--bg-5',
])

const handleStop = () => {}
const handleNext = () => {
  // chuyển router
}
const countDownTimer = () => {
  setTimeout(() => {
    time.value = time.value - 1
    if (time.value < 0) return
    countDownTimer()
  }, 1000)
}

const initDisplay = () => {
  $io.emit('host-join-game', route.params?.id)

  $io.on('noGameFound', () => {
    navigateTo('/not-found')
  })

  $io.on('gameQuestions', (data) => {
    const dataTest = {
      content: 'abc',
      answers: [
        {
          content: 'a',
          value: 1,
        },
        {
          content: 'a',
          value: 1,
        },
        {
          content: 'a',
          value: 1,
        },
        {
          content: 'a',
          value: 1,
        },
      ],
      time: 5,
      total: 8,
      current: 1,
      score: 5,
    }
    question.value = dataTest
    time.value = dataTest.time
    countDownTimer()
  })

  $io.on('updatePlayersAnswered', (data) => {
    // thông kê các đáp án người dùng chọn
    const dataTest = [
      {
        id: 1,
        content: '',
        value: 1,
        percent: 10,
      },
    ]
    statistic.value = dataTest
  })

  $io.on('questionOver', (playerData, correct) => {
    const dataTest = [
      {
        id: 1,
        name: 'a',
        score: 1,
      },
      {
        id: 2,
        name: 'a',
        score: 1,
      },
    ]
    rank.value = dataTest
  })
}

onMounted(() => {
  if ($io) {
    initDisplay()
  }
})
</script>
<style scoped>
.question--pos {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 999;
}
</style>
