<template>
  <div
    class="flex h-20 items-center justify-between overflow-hidden border bg-white"
  >
    <div class="px-2 py-2">
      <h1>History</h1>
      <a-avatar-group :max-count="3" :size="20">
        <a-avatar
          v-for="item in userAccount"
          :key="item.id"
          :style="`background-color: ${item.color}`"
          >{{ item.name }}</a-avatar
        >
      </a-avatar-group>
    </div>
  </div>
</template>
<script lang="ts" setup>
const userAccount = [
  {
    id: 1,
    color: '#f56a00',
    name: 'o',
  },
  {
    id: 2,
    color: '#f56a00',
    name: 'o',
  },
  {
    id: 3,
    color: '#f56a00',
    name: 'o',
  },
  {
    id: 4,
    color: '#f56a00',
    name: 'o',
  },
]


</script>
