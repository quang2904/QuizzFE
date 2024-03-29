<template>
  <a-button @click="onNew">New</a-button>
</template>
<script lang="ts" setup>
import type { Socket } from 'socket.io-client'

definePageMeta({
  layout: 'quizz',
})

const { $io }: { $io: Socket } = useNuxtApp()

const onNew = async () => {
  try {
    const pin = await useMyFetch('/game/room', {
      method: 'POST',
      body: {
        clientId: $io.id,
        roomId: 1,
      },
    })
    navigateTo({
      path: '/host',
      query: {
        pin: String(pin.data.value),
      },
    })
  } catch (error) {}
}
</script>
