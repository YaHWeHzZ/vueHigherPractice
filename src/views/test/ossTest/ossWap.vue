<template>
  <div>
    <img class="img" :src="imgSrc" />
    <a
      href="https://skc4rgrf.spdb.com.cn/oss/wechatworkbucket/wechatwork/4D510B567D9811EB8DD1B5F972229CC8.doc"
    >
      doc
    </a>
    <button @click="openFile"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc:
        'https://skc4rgrf.spdb.com.cn/oss/wechatworkbucket/wechatwork/EB6142387C8B11EB964E4D8138CE0B7F.png',
      imgSrc2:
        'https://mlmdacdntest.spdb.com.cn/oss/product-mlife/HotActivity/B07D72CC775C11EB9B5A057037E81060.JPG',
    }
  },
  methods: {
    openFile() {
      window.open(
        'https://skc4rgrf.spdb.com.cn/oss/wechatworkbucket/wechatwork/4D510B567D9811EB8DD1B5F972229CC8.doc'
      )
    },
  },
}
</script>

<style scoped>
.img {
  width: 40px;
}
</style>
