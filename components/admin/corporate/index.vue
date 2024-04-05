<template>
  <div class="mx-auto w-screen gap-5">
    <a-tabs v-model:activeKey="activeKey" class="w-full">
      <a-tab-pane
        v-for="item in LIST_TABS_LIBRARY"
        :key="item.key"
        :tab="item.label"
      />
    </a-tabs>
    <Content v-if="activeKey === KEY_TABS_LIBRARY.TAB_CONTENT && !isDetail" />
    <Team v-if="activeKey === KEY_TABS_LIBRARY.TAB_TEAM && !isDetail" />
    <Folder v-if="activeKey === KEY_TABS_LIBRARY.TAB_FOLDER && !isDetail" />
    <Detail v-if="isDetail" :activeKey="KEY_TABS_LIBRARY.TAB_FOLDER" />
  </div>
</template>
<script lang="ts" setup>
import Content from '@/components/admin/corporate/content/index.vue'
import Team from '@/components/admin/corporate/team/index.vue'
import Folder from '@/components/admin/corporate/folder/index.vue'
import Detail from '@/components/admin/corporate/detail/index.vue'
import { LIST_TABS_LIBRARY, KEY_TABS_LIBRARY } from '@/constants/corporate'

const route = useRoute()
const activeKey = ref<number>(2)
const isDetail = ref<boolean>(false)

watch(
  route.query,
  (value) => {
    if (value?.teamId || value?.folderId) {
      isDetail.value = true
    }
  },
  { immediate: true }
)
</script>
