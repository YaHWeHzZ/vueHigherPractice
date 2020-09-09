<template>
  <div>
    <!-- 默认插槽 -->
    <div>
      <a :href="url">
        <slot>{{ submit }}</slot>
      </a>
    </div>
    <!-- 具名插槽 -->
    <div class="container">
      <header>
        <slot name="header">默认Header显示内容</slot>
        <slot name="footer">默认Footer显示内容</slot>
      </header>
    </div>
    <!-- 作用域插槽，让父组件中具体展示的属性，取值自子组件 -->
    <div>
      <slot name="scopeSlot" :user1="user1"></slot>
      <slot name="scopeSlot2" :user2="user2"></slot>
      <slot :user3="user3"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
  },
  data() {
    return {
      user1: '作用域插槽-子组件的John',
      user2: '简写作用域插槽-子组件的Smith',
      user3: '默认作用域插槽-子组件的Yuki',
    }
  },
  mounted() {
    console.log('url', this.url)
  },
  //   methods: {},
}
</script>
