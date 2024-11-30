<template>
  <view class="index">
    <text>{{ msg }}</text>
    <view @touchstart="null" @tap="handleClick">函数式调用dialog</view>
    <view @touchstart="null" @tap="handleClickDialog">组件式调用dialog</view>
    <view @touchstart="null" @tap="handleClickPromiseDialog">函数式调用promiseDialog</view>
    <Dialog v-model:visible="dialogVisible" title="这是组件调用的dialog组件" />
  </view>
</template>

<script>
import { ref, createVNode, render } from 'vue'
import './index.scss'
import { showDialog } from '../../components/dialog/dialog'
import Dialog from '../../components/dialog/index.vue'
import { promiseDialog } from '../../components/dialog/promiseDialog'

export default {
  components: {
    Dialog,
  },
  setup(props, ctx) {
    const msg = ref('Hello world')

    const dialogVisible = ref(false)

    const handleClick = () => {
      showDialog({
        title: '这是函数式调用的dialog组件',
        content: '这是内容<h1 style="color: red">Wallace is way taller than other reporters.</h1>',
        parentClassName: 'index',
        confirm: () => {
          console.log('外层点击确认')
        },
        cancel: () => {
          console.log('外层点击取消')
        },
      })
    }

    const handleClickDialog = () => {
      dialogVisible.value = true
    }

    const handleClickPromiseDialog = async() => {
      const data = await promiseDialog({
        title: '这是函数式调用的promiseDialog组件',
        content: '这是内容<h1 style="color: red">Wallace is way taller than other reporters.</h1>',
        parentClassName: 'index',
      })
      console.log(data)
    }
    return {
      msg,
      handleClick,
      dialogVisible,
      handleClickDialog,
      handleClickPromiseDialog
    }
  },
}
</script>
