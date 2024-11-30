<template>
  <view v-show="showPopup">
    <view>title: {{title}}</view>
    <view>contnet: {{content}}</view>
    <button @tap="handleConfirm">确定</button>
    <button @tap="handleCancel">取消</button>
  </view>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const props = defineProps({
  parentClassName: String,
  visible: Boolean,
  title: String,
  content: String,
  confirm: Function,
  cancel: Function
})

const emit = defineEmits(['update', 'update:visible', 'ok', 'cancel', 'opened', 'closed'])

const showPopup = ref(props.visible)

watch(
  () => props.visible,
  (value) => {
    console.log('props.visible', props.visible)
    showPopup.value = value
    if (value) {
      emit('opened')
    }
  }
)

const handleConfirm = () => {
  console.log('点击确定')
  emit('ok')
  props?.confirm && props.confirm()
  closed()
}

const handleCancel = () => {
  console.log('点击取消')
  emit('cancel')
  props?.cancel && props.cancel()
  closed()
}

const closed = () => {
  emit('closed')
  emit('update:visible', false)
}
</script>
