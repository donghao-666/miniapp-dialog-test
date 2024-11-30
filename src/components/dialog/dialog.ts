import Dialog from './index.vue'
import { createVNode, render } from 'vue'

export const showDialog = (options) => {
  const { parentClassName = '' } = options
  const vnode = createVNode(Dialog, {
    ...options,
    confirm: () => {
      options?.confirm && options?.confirm()
      render(null, page)
    },
    cancel: () => {
      options?.cancel && options?.cancel()
      render(null, page)
    },
    visible: true,
  })
  const page = document.getElementsByClassName(parentClassName)[0]
  render(vnode, page)
}
