<template>
  <a-layout-header class="flex items-center gap-4 border-l bg-white px-5">
    <div class="flex flex-1">
      <a-input placeholder="Tìm trong thư viện của tôi" />
      <a-select
        class="w-20"
        v-model:value="value1"
        :options="options"
      ></a-select>
    </div>
    <a-button large :icon="h(BellOutlined)" />
    <a-button type="primary" large :icon="h(PlusOutlined)"
      >TẠO NỘI DUNG MỚI
    </a-button>
  </a-layout-header>
</template>
<script lang="ts" setup>
import { BellOutlined, PlusOutlined } from '@ant-design/icons-vue'

const value1 = ref('a1')
const options = [...Array(25)].map((_, i) => ({
  value: (i + 10).toString(36) + (i + 1),
}))
</script>
