<template>
  <HeadHost />
  <div class="mt-5 flex justify-center">
    <div class="flex gap-3 rounded border px-3 py-3">
      <div class="text-3xl font-medium">Pin: 576172</div>
      <qrcode :size="60" />
    </div>
  </div>
  <div class="mt-5 flex justify-between px-5">
    <h1>Number of player: 1</h1>
    <div>
      <a-button type="primary">Player</a-button>
      <a-button>Cancel</a-button>
    </div>
  </div>
  <div class="mt-10 flex flex-wrap justify-center gap-10">
    <div><h1>acb1231</h1></div>
    <div><h1>acb1231</h1></div>
    <div><h1>acb1231</h1></div>
    <div><h1>acb1231</h1></div>
    <div><h1>acb1231</h1></div>
  </div>
</template>
<script lang="ts" setup>
import { HeadHost } from '#components'

definePageMeta({
  layout: 'quizz',
})
</script>
