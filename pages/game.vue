<template>
  <div class="flex justify-center">
    <div class="mt-64 flex w-80 flex-col gap-3 border px-3 py-3">
      <h1>Quizz</h1>
      <a-input class="mt-2" placeholder="Nickname" />
      <a-input class="mt-2" placeholder="Game PIN" />
      <a-button type="primary">Join</a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'quizz',
})
</script>
