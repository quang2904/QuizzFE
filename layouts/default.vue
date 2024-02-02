<template>
  <a-layout class="h-screen" theme="light">
    <a-layout-sider
      theme="light"
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo">Quizz</div>
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
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
      <a-layout-content class="m-5">
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { BellOutlined, PlusOutlined } from '@ant-design/icons-vue'
const value1 = ref('a1')
const options = [...Array(25)].map((_, i) => ({
  value: (i + 10).toString(36) + (i + 1),
}))

const onCollapse = (collapsed: boolean, type: string) => {}

const onBreakpoint = (broken: boolean) => {
  console.log(broken)
}

const selectedKeys = ref<string[]>(['4'])
</script>
<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  margin-left: 24px;
  font-size: 24px;
  font-weight: 700;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}
.ant-layout-header {
  background: white;
}

.ant-layout-header {
  padding: 0 1.25rem;
}
</style>
