<template>
  <div>
    <div class="mx-1 flex items-center justify-between">
      <div class="flex">
        <ArrowLeftOutlined class="mr-2 mt-1" @click="onBack" />
        <div>{{ route?.query?.teamId ? 'Teams' : 'Folder' }} / history</div>
      </div>
      <a-dropdown placement="bottomRight" :arrow="{ pointAtCenter: true }">
        <a-button :icon="h(MoreOutlined)" />
        <template #overlay>
          <a-menu>
            <a-menu-item
              ><div
                class="flex items-center font-medium"
                @click="onAddInFolder"
              >
                <FolderOutlined class="mr-1" />
                Thêm vào thư mục
              </div></a-menu-item
            >
            <a-menu-item
              ><div class="flex items-center font-medium" @click="onDelete">
                <DeleteOutlined class="mr-1" /> Xóa
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div class="mt-2 flex gap-2">
      <a-select
        v-model:value="detail.filterId"
        style="width: 120px"
        :options="LIST_FILTER"
      />
      <a-select
        v-model:value="detail.sortId"
        style="width: 120px"
        :options="LIST_SORT"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MoreOutlined } from '@ant-design/icons-vue'
import { LIST_FILTER, LIST_SORT } from '@/constants/corporate'

const route = useRoute()
const corporate = useCorporate()
const { detail } = storeToRefs(corporate)

const onAddInFolder = () => {}
const onDelete = () => {}
const onBack = () => {}
</script>
