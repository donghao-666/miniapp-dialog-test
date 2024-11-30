<template>
  <view class="index">
    <text>{{ msg }}</text>
    <view @touchstart="null" @tap="handleClick">函数式调用dialog</view>
    <view @touchstart="null" @tap="handleClickDialog">组件式调用dialog</view>
    <Dialog v-model:visible="dialogVisible" title="这是组件调用的dialog组件" />
  </view>
</template>

<script>
import { ref, createVNode, render } from 'vue'
import './index.scss'
import { showDialog } from '../../components/dialog/dialog'
import Dialog from '../../components/dialog/index.vue'

export default {
  components: {
    Dialog
  },
  setup(props, ctx) {
    const msg = ref('Hello world')

    const dialogVisible = ref(false)

    const handleClick = () => {
      showDialog({
        title: '这是函数式调用的dialog组件',
        content: '这是内容',
        parentClassName: 'index',
        confirm: () => {
          console.log('外层点击确认')
        },
        cancel: () => {
          console.log('外层点击取消')
        }
      })
    }

    const handleClickDialog = () => {
      dialogVisible.value = true
    }
    return {
      msg,
      handleClick,
      dialogVisible,
      handleClickDialog
    }
  },
}
</script>
