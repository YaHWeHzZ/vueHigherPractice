<template>
  <div>
    <slot name="deconstruct" :user="user">解构插槽默认显示的内容<br /></slot>
    <div></div>
    <slot name="deconstruct2" :user2="user2">
      解构插槽2默认显示的内容
    </slot>
    <div></div>
    <slot name="deconstruct3" :user="user">解构插槽3默认显示的内容</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '解构插槽-子组件的Smith',
    }
  },
}
</script>
