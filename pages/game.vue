<template>
  <div class="flex justify-center">
    <div class="mt-64 flex w-80 flex-col gap-3 border px-3 py-3">
      <h1>Quizz</h1>
      <a-input class="mt-2" v-model:value="userName" placeholder="Nickname" />
      <a-input class="mt-2" v-model:value="room" placeholder="Game PIN" />
      <a-button type="primary" @click="onJoinGame">Join</a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Socket } from 'socket.io-client'

definePageMeta({
  layout: 'quizz',
})

const { $io }: { $io: Socket } = useNuxtApp()
const userName = ref('')
const room = ref('')

const onJoinGame = async () => {
  try {
    await useMyFetch('/game/player', {
      method: 'POST',
      body: {
        clientId: $io.id,
        player: {
          name: userName.value,
          pin: room.value,
        },
      },
    })
    navigateTo({
      path: '/lobby',
      query: {
        room: room.value,
      },
    })
  } catch (error) {}
}
</script>
