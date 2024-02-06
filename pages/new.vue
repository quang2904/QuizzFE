<template>
  <Editor v-model="value" class="border" />
</template>
<script setup lang="ts">
import { Editor } from '#components'

definePageMeta({
  layout: 'quizz',
})

const value = ref('')

watch(value, async (newQuestion) => {
  console.log('newQuestion', newQuestion)
})
</script>
