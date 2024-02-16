<template>
  <div class="bg-white px-6 pt-6">
    <div class="flex">
      <div class="mr-2 h-20 w-20">
        <img
          class="h-full w-full"
          alt="img"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </div>
      <div class="flex flex-1 flex-col gap-1">
        <p class="my-0 text-sm">Quizz</p>
        <h2 class="my-0 text-lg">Math</h2>
        <div class="text-ms flex items-center gap-2">
          <div class="flex items-center gap-1"><HomeOutlined />1 Câu hỏi</div>
          <div class="flex items-center gap-1"><HomeOutlined />1 Câu hỏi</div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex flex items-center justify-between">
      <div class="flex items-center text-xs">
        <img
          class="mr-1 h-8 w-8 rounded-full border-2"
          alt="avatar"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        <div>
          <div>Nguyễn Minh Quang</div>
          <div>15 ngày trước</div>
        </div>
      </div>
      <div class="flex gap-3">
        <a-button :icon="h(HomeOutlined)">Chỉnh sửa</a-button>
        <a-button :icon="h(HomeOutlined)">Xem trước</a-button>
        <a-button :icon="h(HomeOutlined)">Hợp tác</a-button>
        <a-button :icon="h(MoreOutlined)" />
      </div>
    </div>
    <div class="mt-6 grid grid-cols-2 gap-3">
      <a-button type="primary" size="large"
        >Bắt đầu phiên bản trực tiếp</a-button
      >
      <a-button type="primary" size="large">Giao hoạt động</a-button>
    </div>
    <a-divider />
    <a-tabs v-model:activeKey="activeKey" class="my-0">
      <a-tab-pane key="1" tab="Câu hỏi" force-render />
      <a-tab-pane key="2" tab="Phiên" />
    </a-tabs>
  </div>
  <div class="mt-5">
    <a-button size="small">Ẩn đáp án</a-button>
    <div class="mt-5 flex flex-col">
      <div class="bg-white px-3 py-3">
        <div class="flex justify-between">
          <h3>1. Nhiều lựa chọn</h3>
          <div class="flex gap-2">
            <a-button>30 giây</a-button>
            <a-button>1 điểm</a-button>
          </div>
        </div>
        <div>1 + 1 = ?</div>
        <a-divider orientation="left" orientation-margin="0px" class="text-xs">
          Lựa chọn trả lời
        </a-divider>
        <div class="grid grid-cols-2">
          <div class="flex items-center gap-2">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <div>1</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-2.5 w-2.5 rounded-full bg-red-500"></div>
            <div>1</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-2.5 w-2.5 rounded-full bg-red-500"></div>
            <div>1</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-2.5 w-2.5 rounded-full bg-red-500"></div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { HomeOutlined, PlusOutlined, MoreOutlined } from '@ant-design/icons-vue'
const activeKey = ref('1')
</script>
