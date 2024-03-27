<template>
  <div class="mt-24 flex flex-col justify-center">
    <div class="mb-8 text-center">
      <h2>User Name: {{ userName }}</h2>
      <h2>Game Pin: {{ room }}</h2>
    </div>
    <a-spin size="large" />
    <div class="mt-8 text-center">
      <h1>You're in!</h1>
      <h3>See your nickname on screen?</h3>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Socket } from 'socket.io-client'

definePageMeta({
  layout: 'quizz',
})

const { $io }: { $io: Socket } = useNuxtApp()
const route = useRoute()
const userName = ref<string>('')
const room = ref<string>('')

onMounted(() => {
  userName.value = route.query?.userName
  room.value = route.query?.room

  if ($io) {
    $io.emit('player-join', {
      name: userName.value,
      pin: room.value,
    })

    $io.on('game-started', () => {
      console.log('game started!!!')
      navigateTo({
        path: '/playerGame',
      })
    })
  }
})
</script>
