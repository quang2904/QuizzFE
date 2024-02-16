<template>
  <Editor v-model="preview.content" class="border" />
</template>
<script setup lang="ts">
import { Editor } from '#components'

definePageMeta({
  layout: 'quizz',
})
const preview = usePreview()

const value = ref('')

watch(value, async (newQuestion) => {
  console.log('newQuestion', newQuestion)
})
</script>
