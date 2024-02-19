<template>
  <a-button type="primary" @click="showModal">Open 1</a-button>
  <ModalDetailResult v-model="visible" />
  <qrcode value="abc" />
</template>
<script lang="ts" setup>
import { ModalDetailResult } from '#components'

definePageMeta({
  layout: 'quizz',
})
const visible = ref<boolean>(false)

const showModal = () => {
  visible.value = true
}
</script>
