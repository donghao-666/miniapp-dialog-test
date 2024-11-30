import { showDialog } from './dialog'

export const promiseDialog = (options) => {
  return new Promise((reslove, reject) => {
    return showDialog({
      ...options,
      confirm: () => {
        reslove('promiseDialog返回值成功')
      },
      cancel: () => {
        reject('promiseDialog返回值错误')
      },
    })
  })
}
