<template>
  <a-button @click="onNew">New</a-button>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'quizz',
})

const onNew = () => {
  navigateTo({
    path: '/host',
  })
}
</script>
