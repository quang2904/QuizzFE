<template>
  <tinymce
    api-key="b3m4owtz9mxa6zl1otn948snen4m5np54rm3w5s6a5zny4kz"
    cloudChannel="5-stable"
    @input="onTinymceChange"
    :initial-value="value"
    inline
    :init="config"
  />
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Nhập nội dung',
  },
  init: {
    type: Object,
    default: () => {},
  },
})

const emit = defineEmits(['update:modelValue'])

const value = useSyncProps<String>(props, 'modelValue', emit)

const config = ref({
  menubar: false,
  plugins: ['charmap table emoticons'],
  toolbar_mode: 'sliding',
  toolbar:
    ' bold italic underline | fontselect fontsizeselect formatselect | forecolor backcolor casechange |' +
    ' permanentpen formatpainter | numlist bullist checklist | ' +
    ' pageembed template | alignleft aligncenter alignright alignjustify |  ' +
    ' emoticons charmap table',
  placeholder: props.placeholder,
  ...props.init,
})

const onTinymceChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.innerHTML)
}
</script>
