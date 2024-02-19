<template>
  <HeadHost />
  <div class="mt-20 flex flex-col items-center gap-5">
    <h1>Pin: 429382</h1>
    <a-spin size="large" />
    <h1 id="title1">You're in!</h1>
    <h3 id="title2">See your nickname on screen?</h3>
  </div>
</template>
<script lang="ts" setup>
import { HeadHost } from '#components'

definePageMeta({
  layout: 'quizz',
})
</script>
