<template>
  <a-modal v-model:visible="visible" title="Cài đặt Quiz">
    <div class="flex gap-4">
      <div class="flex flex-1 flex-col gap-4">
        <div class="flex flex-col">
          <label>Tên</label>
          <a-input />
        </div>
        <div class="flex flex-col">
          <label>Ngôn ngữ</label>
          <a-select />
        </div>
        <div class="flex flex-col">
          <label>Hiển thị</label>
          <a-select />
        </div>
      </div>
      <div class="flex-1 rounded-lg border-2 border-dashed"></div>
    </div>
    <template #footer>
      <a-button type="primary">Lưu</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])
const visible = useSyncProps<Boolean>(props, 'modelValue', emit)
</script>
