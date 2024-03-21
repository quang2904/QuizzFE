<template>
  <h1>Minigame</h1>
  <br />
  <div v-if="isStartGame">Start Game</div>
  <div v-if="!isLobby">
    <a-button @click="onCreateGame">New Game</a-button>
    <div>
      <label>Room</label>
      <a-input v-model:value="room" />
    </div>
    <div><label>Name</label><a-input v-model:value="name" /></div>
    <a-button @click="onJoinRoom">Join</a-button>
  </div>
  <div v-else>
    <h2>{{ pin }}</h2>
    <button @click="startGame">start Game</button>
    <div>
      <b>{{ players.length }}</b>
    </div>
    <div v-for="(item, index) in players" :key="index">
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Socket } from 'socket.io-client'
const { $io }: { $io: Socket } = useNuxtApp()
const room = ref('')
const pin = ref('')
const isLobby = ref(false)
const players = ref([])
const isStartGame = ref(false)
const name = ref('')

definePageMeta({
  layout: 'quizz',
})

const fetchRooms = () => {
  $io.on('showGamePin', (data) => {
    pin.value = data.pin
  })

  $io.on('updatePlayerLobby', (data) => {
    players.value = data
  })

  $io.on('game-started', (data) => {
    console.log('Game Started!', data)
    isStartGame.value = true
    // change router
  })
}
const onCreateGame = () => {
  isLobby.value = true
  $io.emit('host-join', 1)
}
const onJoinRoom = () => {
  $io.emit('player-join', { name: name.value, pin: room.value })
}
const startGame = () => {
  $io.emit('start-game', 11111)
}

onMounted(() => {
  if ($io) {
    fetchRooms()
  }
})
</script>
