<template>
  <!-- <a-layout class="h-screen" theme="light">
    <SiderBar />
    <a-layout>
      <HeadDefault />
      <a-layout-content class="m-5"> -->
  <div>
    <slot></slot>
  </div>
  <!-- </a-layout-content>
    </a-layout>
  </a-layout> -->
</template>
<script lang="ts" setup>
import { SiderBar, HeadDefault } from '#components'
</script>
