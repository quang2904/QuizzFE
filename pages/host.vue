<template>
  <HeadHost />
  <div class="mt-5 flex justify-center">
    <div class="flex gap-3 rounded border px-3 py-3">
      <div class="text-3xl font-medium">Pin: {{ room }}</div>
      <qrcode :size="60" />
    </div>
  </div>
  <div class="mt-5 flex justify-between px-5">
    <h1>Number of player: {{ players.length }}</h1>
    <div>
      <a-button type="primary" @click="onStartGame">Player</a-button>
      <a-button @click="onBack">Cancel</a-button>
    </div>
  </div>
  <div class="mt-10 flex flex-wrap justify-center gap-10">
    <div v-for="(item, index) in players" :key="index">
      <h1>{{ item.name }}</h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { HeadHost } from '#components'
import type { Socket } from 'socket.io-client'

definePageMeta({
  layout: 'quizz',
})

const { $io }: { $io: Socket } = useNuxtApp()
const players = ref([])
const room = ref('')

const fetchRooms = () => {
  console.log('fetchRooms')

  $io.emit('host-join')

  $io.on('showGamePin', (data) => {
    console.log('showGamePin', data)
    room.value = data.pin
  })

  $io.on('updatePlayerLobby', (data) => {
    console.log('updatePlayerLobby', data)
    players.value = data
  })

  $io.on('game-started', (id) => {
    console.log('Game started!!')
    navigateTo({
      path: '/hostGame',
      params: {
        id,
      },
    })
  })
}

const onStartGame = () => {
  $io.emit('start-game')
}

const onBack = () => {
  console.log('onBack')
}

onMounted(() => {
  console.log('onMounted')
  if ($io) {
    fetchRooms()
  }
})
</script>
