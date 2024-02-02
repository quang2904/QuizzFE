<template>
  <a-layout-header
    class="flex items-center justify-between gap-4 bg-white shadow"
  >
    <div class="flex items-center gap-2">
      <h1 class="my-0 text-xl">Quizz</h1>
      <div class="h-6 w-0.5 bg-gray-400"></div>
      <p class="my-0">Math one</p>
    </div>
    <div class="flex gap-2">
      <a-button :icon="h(BellOutlined)" />
      <a-button :icon="h(BellOutlined)" />
      <a-button :icon="h(BellOutlined)" type="primary">Xuất bản</a-button>
    </div>
  </a-layout-header>

  <div class="mx-auto flex max-w-[1500px] gap-28">
    <div class="answer-layout flex-[3] pt-5">
      <div class="mb-5 flex justify-between">
        <div class="flex items-center gap-2"><BellOutlined /> 2 Câu hỏi</div>
        <a-button :icon="h(BellOutlined)">Tạo câu hỏi mới</a-button>
      </div>
      <div v-for="item in [1, 2, 3, 4]" :key="item" class="mb-10">
        <div class="rounded-lg border bg-white">
          <div class="flex items-center justify-between bg-gray-100 px-2 py-2">
            <div class="flex items-center gap-2">
              <a-button :icon="h(BellOutlined)" />
              <BellOutlined />
              <div>Cấu hỏi 1</div>
            </div>
            <div class="flex items-center justify-end gap-2">
              <a-button :icon="h(BellOutlined)">Chỉnh sửa</a-button>
              <a-button :icon="h(BellOutlined)" />
              <a-button :icon="h(BellOutlined)" />
            </div>
          </div>
          <div class="mb-3 flex flex-col px-2">
            <div class="bg-white">
              <div>1 + 1 = ?</div>
              <a-divider
                orientation="left"
                orientation-margin="0px"
                class="text-xs"
              >
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
          <div class="mt-2 flex gap-2 bg-gray-100 px-2 py-2">
            <a-select
              v-model:value="value1"
              class="w-32"
              :options="options1"
              @change="handleChange"
            >
              <template #suffixIcon
                ><smile-outlined class="ant-select-suffix"
              /></template>
            </a-select>
            <a-select
              v-model:value="value1"
              class="w-32"
              :options="options1"
              @change="handleChange"
            >
              <template #suffixIcon
                ><smile-outlined class="ant-select-suffix"
              /></template>
            </a-select>
          </div>
        </div>
        <div class="one w-full">
          <div class="line a h-10"></div>
          <div class="b h-10 border border-b-0"></div>
          <a-button type="primary" class="c h-10">Edit</a-button>
          <a-button type="primary" class="d h-10">Add</a-button>
        </div>
      </div>
    </div>
    <div class="flex-1 pt-5">
      <div class="rounded-lg border px-3 py-3">
        <div class="mb-3 h-32 w-full">
          <a-upload-dragger
            v-model:fileList="fileList"
            name="file"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            @change="handleChangeUpload"
            @drop="handleDrop"
            class="round-lg"
          >
            <p class="text-4xl text-blue-400"><inbox-outlined /></p>
            <p class="text-xs">Click or drag file to this area to upload</p>
          </a-upload-dragger>
        </div>
        <div class="flex justify-between">
          <h3 class="my-0">Math one</h3>
          <a-button :icon="h(BellOutlined)" />
        </div>
        <div class="flex items-center gap-2">
          <BellOutlined /> Đổi thời gian
          <div class="h-5 w-0.5 bg-gray-400"></div>
          <BellOutlined /> Đổi điểm
        </div>
        <a-divider />
        <h3>Nhập công cụ</h3>
        <div class="mb-3 flex justify-between">
          <div class="flex items-center gap-2">
            <BellOutlined /> Biểu mẫu Google
          </div>
          <a-button :icon="h(BellOutlined)" />
        </div>
        <div class="flex justify-between">
          <div class="flex items-center gap-2">
            <BellOutlined /> Biểu mẫu Google
          </div>
          <a-button :icon="h(BellOutlined)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'quizz',
})
import {
  BellOutlined,
  PlusOutlined,
  InboxOutlined,
} from '@ant-design/icons-vue'
import type { SelectProps, UploadChangeParam } from 'ant-design-vue'
import { message } from 'ant-design-vue'
const value1 = ref('lucy')
const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}
const options1 = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'disabled',
    label: 'Disabled',
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe',
  },
])
const fileList = ref([])
const handleChangeUpload = (info: UploadChangeParam) => {
  const status = info.file.status
  if (status !== 'uploading') {
    console.log(info.file, info.fileList)
  }
  if (status === 'done') {
    message.success(`${info.file.name} file uploaded successfully.`)
  } else if (status === 'error') {
    message.error(`${info.file.name} file upload failed.`)
  }
}
function handleDrop(e: DragEvent) {
  console.log(e)
}
</script>
<style>
.answer-layout::-webkit-scrollbar {
  width: 1px;
}

.answer-layout::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 6px;
}
.answer-layout {
  height: calc(100vh - 64px);
  overflow: auto;
}
.ant-divider-horizontal.ant-divider-with-text {
  font-size: 10px;
  font-weight: 400;
}
.ant-layout-header {
  background: white !important;
}

.ant-layout-header {
  padding: 0 1.25rem !important;
}

.line {
  position: relative;
}

.line::after {
  content: '';
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(50%);
  width: 1px;
  height: 100%;
  background: rgb(229, 231, 235);
}

.one {
  display: grid;
  gap: 0 !important;
  grid-template:
    'a a a a a a a'
    '. . b b b . .'
    '. d d . c c .';
}
.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
.d {
  grid-area: d;
}
</style>
