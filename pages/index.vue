<template>
  <div class="mx-auto flex max-w-[1300px] gap-5">
    <div class="w-64">
      <h3>Thư viện</h3>
      <a-list size="small" :data-source="libraries">
        <template #renderItem="{ item }">
          <a-list-item class="flex">
            <div class="flex items-center gap-2">
              <component :is="item.icon"></component>
              <div>{{ item.title }}</div>
            </div>
            <div>{{ item.number }}</div>
          </a-list-item>
        </template>
      </a-list>
      <a-divider />
      <div class="flex items-center justify-between">
        <h3>Đội của tôi</h3>
        <a-button size="small"><PlusOutlined class="text-xs" />Mới</a-button>
      </div>
      <a-list size="small" :data-source="teams">
        <template #renderItem="{ item }">
          <a-list-item class="flex">
            <div class="flex items-center gap-2">
              <component :is="item.icon"></component>
              <div>{{ item.title }}</div>
            </div>
            <div>{{ item.number }}</div>
          </a-list-item>
        </template>
      </a-list>
      <a-divider />
      <div class="flex items-center justify-between">
        <h3>Bộ sưu tập</h3>
        <a-button size="small"><PlusOutlined class="text-xs" />Mới</a-button>
      </div>
      <a-list size="small" :data-source="collections">
        <template #renderItem="{ item }">
          <a-list-item class="flex">
            <div class="flex items-center gap-2">
              <component :is="item.icon"></component>
              <div>{{ item.title }}</div>
            </div>
            <div>{{ item.number }}</div>
          </a-list-item>
        </template>
      </a-list>
    </div>
    <div class="flex-1">
      <div class="mb-5 flex justify-end gap-2">
        <a-select
          v-model:value="value1"
          style="width: 200px"
          :options="options"
        />
        <a-select
          v-model:value="value1"
          style="width: 200px"
          :options="options"
        />
      </div>
      <div class="flex bg-white px-2 py-2">
        <div class="mr-2 w-28">
          <img
            class="h-full w-full"
            alt="img"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </div>
        <div class="flex flex-1 flex-col gap-1">
          <div class="flex items-start justify-between">
            <div class="flex flex-col gap-1">
              <p class="my-0 text-sm">Quizz</p>
              <h2 class="my-0 text-lg">Math</h2>
            </div>
            <div>
              <a-button type="link" :icon="h(MoreOutlined)" />
            </div>
          </div>
          <div class="text-ms flex items-center gap-2">
            <div class="flex items-center gap-1"><HomeOutlined />1 Câu hỏi</div>
            <div class="flex items-center gap-1"><HomeOutlined />1 Câu hỏi</div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xs">
              <img
                class="mr-1 h-6 w-6 rounded-full border-2"
                alt="avatar"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
              <span>Nguyễn Minh Quang</span>-
              <span>15 ngày trước</span>
            </div>
            <div class="flex gap-1">
              <a-button size="small">Hợp tác</a-button>
              <a-button size="small" type="primary">Chơi</a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { HomeOutlined, PlusOutlined, MoreOutlined } from '@ant-design/icons-vue'
const value1 = ref('a1')
const options = [...Array(25)].map((_, i) => ({
  value: (i + 10).toString(36) + (i + 1),
}))
const libraries: Object[] = [
  {
    icon: HomeOutlined,
    title: 'Tất cả nội dung',
    type: 0,
    number: 0,
  },
  {
    icon: HomeOutlined,
    title: 'Khóa học',
    type: 1,
    number: 1,
  },
  {
    icon: HomeOutlined,
    title: 'Được tạo bởi tôi',
    type: 1,
    number: 1,
  },
  {
    icon: HomeOutlined,
    title: 'Đã nhập',
    type: 1,
    number: 1,
  },
  {
    icon: HomeOutlined,
    title: 'Trước đây được sử dụng',
    type: 1,
    number: 1,
  },
  {
    icon: HomeOutlined,
    title: 'Được tôi thích',
    type: 1,
    number: 1,
  },
  {
    icon: HomeOutlined,
    title: 'Được chia sẻ với tôi',
    type: 1,
    number: 1,
  },
  {
    icon: HomeOutlined,
    title: 'Bản thảo',
    type: 1,
    number: 1,
  },
]
const teams: Object[] = [
  {
    icon: HomeOutlined,
    title: 'Tất cả nội dung',
    type: 0,
    number: 0,
  },
  {
    icon: HomeOutlined,
    title: 'Khóa học',
    type: 1,
    number: 1,
  },
]
const collections: Object[] = [
  {
    icon: HomeOutlined,
    title: 'Tất cả nội dung',
    type: 0,
    number: 0,
  },
  {
    icon: HomeOutlined,
    title: 'Khóa học',
    type: 1,
    number: 1,
  },
]
</script>
