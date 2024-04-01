<template>
  <div class="h-20 flex-1">
    <div class="flex bg-white px-1 py-1">
      <div class="mr-2 w-28">
        <img
          class="h-full w-full bg-gray-400 object-cover"
          alt="img"
          src="@/assets/img/logo_placeholder_sm.png"
        />
      </div>
      <div class="flex flex-1 flex-col gap-1">
        <div class="flex items-start justify-between">
          <div class="flex flex-col gap-1">
            <h2 class="my-0 text-lg">Math</h2>
          </div>
          <div>
            <a-dropdown
              placement="bottomRight"
              :arrow="{ pointAtCenter: true }"
            >
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
                    ><div
                      class="flex items-center font-medium"
                      @click="onDelete"
                    >
                      <DeleteOutlined class="mr-1" /> Xóa
                    </div>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center text-xs">
            <img
              class="mr-1 h-6 w-6 rounded-full border-2 bg-gray-400"
              alt="avatar"
              src="@/assets/img/logo_placeholder_sm.png"
            />
            <span>Minh Quang</span>
            <UnorderedListOutlined class="ml-3 mr-1" />
            <span>3 Câu hỏi</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UnorderedListOutlined, MoreOutlined } from '@ant-design/icons-vue'

const onAddInFolder = () => {
  console.log('onAddInFolder')
}

const onDelete = () => {
  console.log('onDelete')
}
</script>
