<template>
  <div class="mx-auto flex w-screen gap-5">
    <a-tabs v-model:activeKey="activeKey" class="w-full">
      <a-tab-pane :key="1" tab="Tất cả nội dung" force-render>
        <Content
      /></a-tab-pane>
      <a-tab-pane :key="2" tab="Đội">Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane :key="3" tab="Thư mục">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts" setup>
import Content from '@/components/admin/corporate/content/index.vue'
const activeKey = ref<number>(1)
</script>
