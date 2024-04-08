<template>
  <div class="h-20 flex-1 border" @click="handleFolder(1)">
    <div class="flex h-full items-center bg-white px-1 py-1">
      <div
        class="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200"
      >
        <FolderFilled />
      </div>
      <h1>Math</h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute()
const handleFolder = (id) => {
  navigateTo({
    query: {
      ...route.query,
      teamId: id,
    },
  })
}
</script>
