<template>
  <div>
    <!-- Navbar -->
    <div
      class="navbar flex h-[65px] items-center justify-between px-4 text-lg shadow"
    >
      <div class="flex-1">Minigame</div>
      <div class="item-center inline-flex flex-[8]">
        <div class="tab active mr-4">Play</div>
        <div class="tab mr-4">Category</div>
        <div class="tab mr-4">Question</div>
        <div class="tab mr-4">Bank</div>
      </div>
      <div class="flex flex-1 justify-end">
        <div class="avatar">MQ</div>
      </div>
    </div>
    <!-- Play -->
    <!-- <div class="mx-14 mt-5">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="My Game" force-render></a-tab-pane>
        <a-tab-pane key="2" tab="Bank Game"></a-tab-pane>
      </a-tabs>
      <div class="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <a-input-search
          v-model:value="value"
          placeholder="search"
          @search="onSearch"
          class="input-search"
          size="large"
        />
        <a-select
          ref="select"       
          v-model:value="value1"
          size="large"
          @change="handleChange"
        >
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
        <div class="sm:flex-2 lg:flex-4 md:flex-3"></div>
      </div>
    </div> -->
    <!-- Card -->
    <!-- <div class="mx-14 mt-5">
      <div class="grid grid-cols-2 gap-4">
        <div v-for="item in list" :key="item" class="card border-md rounded-md">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <div class="card-title">
            <p>game abc def</p>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Add and Edit -->
    <!-- <div class="mt-5 flex gap-5">
      <div class="question-list h-screen flex-1">
        <div v-for="item in listAnswer" :key="item" class="mb-5 flex h-24">
          <div class="w-5">1.</div>
          <div class="question-item flex-1"></div>
        </div>
      </div>
      <div class="flex-[7]">
        <div class="flex justify-between">
          <a-radio-group v-model:value="value1" button-style="solid">
            <a-radio-button value="a">Hangzhou</a-radio-button>
            <a-radio-button value="b">Shanghai</a-radio-button>
          </a-radio-group>
          <a-button type="primary">Add</a-button>
        </div>
        <div class="mt-5">
          <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            list-type="picture-card"
            class="upload-file"
          >
            <plus-outlined />
            <div class="ml-1 mt-1">Upload</div>
          </a-upload>
        </div>
        <div class="mt-5 grid grid-cols-2 gap-4">
          <div
            v-for="item in listAnswer"
            :key="item"
            class="answer answer-green rounded border"
          >
            <div class="answer-icon border">A</div>
            <div>{{ item }}</div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Category -->
    <!-- <div class="mx-5 mt-5">
      <div class="my-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <a-input-search
          v-model:value="value"
          placeholder="search"
          @search="onSearch"
          class="input-search"
          size="large"
        />
      </div>
      <div class="flex flex-col gap-3">
        <div
          v-for="item in listAnswer"
          :key="item"
          class="category rounded border"
        >
          <div>{{ item }}</div>
          <div>
            <a-button type="text"><EditOutlined /></a-button>
            <a-button type="text" danger><DeleteOutlined /></a-button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
const value = ref<string>('')
const value1 = ref<string>('lucy')
const value2 = ref<string>('a')
const list = ref<number[]>([1, 2, 3, 4, 5])
const listAnswer = ref<string[]>([
  'Viet Nam',
  'Thai Lan',
  'Hàn Quốc',
  'Trung Quốc',
  'Trung Quốc',
  'Trung Quốc',
  'Trung Quốc',
  'Trung Quốc',
])
const activeKey = ref('1')

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', value.value)
}
</script>
