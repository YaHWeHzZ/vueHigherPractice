<template>
  <div>
    <div></div>
  </div>
</template>

<script>
var promiseTest = new Promise(function(resolve, reject) {
  // 设置一个延时器，2秒后
  setTimeout(function() {
    resolve('ok')
    reject('fail')
  }, 2000)
})
promiseTest.then(function(succMsg) {
  console.log('yeah', succMsg)
  //   document.write('Yeah ', succMsg)
})
promiseTest.catch(function(errMsg) {
  console.log('Wuwu', errMsg)
})
let rs
export default {
  name: 'for test promise',
  mounted() {
    let res = this.promiseInES() //promise对象
    console.log(res)
  },
  methods: {
    promiseInES() {
      setTimeout(() => {
        rs('success')
      }, 2000)
      return new Promise((resolve) => {
        rs = resolve
      })
    },
  },
}
</script>
