<template>
  <div>
    <!-- 父组件通过props传值给子组件，如果是固定的字符串而不是data里定义的变量，传值变量前不用加 : -->
    <!-- <navigation :url="this.url" @click="showUrl">Jump</navigation> -->
    <navigation url="/about">
      <template>
        <!-- 作为插槽的内容，若子组件没有任何slot元素，则此中内容都会被废弃-->
        Logged in to {{ url }}

        <!-- 无效，传递给子组件的值，必须声明在相应的子组件的标签中-->
        <div :url="this.url">Home</div>

        <!-- 插槽中可以插入任意组件 -->
        <otherComponent></otherComponent>
      </template>

      <template #header><h3>替换子组件具名插槽header的内容</h3></template>

      <!-- 作用域插槽显示内容，user取值自子组件，v-slot必须结合tempalte使用 -->
      <template v-slot:scopeSlot="slotProps">
        <h2>{{ slotProps.user1 }}</h2>
      </template>
      <!-- 如果只有一个默认插槽，可使用简略写法如下，等同于v-slot:default="scopeSlot1" -->
      <!-- <template v-slot="scopeSlot1">{{ scopeSlot1.user3 }}</template> -->

      <!-- 使用解构插槽后，简洁写法如下 -->
      <template v-slot:scopeSlot2="{ user2 }">
        <h2>{{ user2 }}</h2>
      </template>
    </navigation>

    <!-- 解构插槽，可以简写作用于插槽 -->
    <deconstruction-slot>
      <!-- 可在{}里定义一些语法，比如将user重名为person -->
      <template v-slot:deconstruct="{ user: person }"> {{ person }}</template>
      <!-- 或者设置当user2未定义时的默认值 -->
      <template
        v-slot:deconstruct2="{ user2 = '解构插槽-user2未定义时的Guest'  }"
      >
        {{ user2 }}
      </template>
      <!-- 默认的写法，在不使用作用域插槽和结构插槽时，默认显示的变量取值自父组件 -->
      <template v-slot:deconstruct3>{{ user }}</template>
    </deconstruction-slot>

    <!-- 插槽应用到v-for列表中的例子 -->
    <!-- <slot-list>
      <template v-slot:todoListSlot>{{ todo.text }}</template>
    </slot-list> -->
  </div>
</template>

<script>
import navigation from './components/navigation'
import otherComponent from './components/otherComponent'
import DeconstructionSlot from './components/DeconstructionSlot'
// import SlotList from './components/SlotList'
export default {
  components: {
    navigation,
    otherComponent,
    DeconstructionSlot,
    // SlotList,
  },
  data() {
    return {
      url: '/home',
      user: '父组件自己的user',
      name: 'John',
      filteredTodos: [{ text: 'piano' }, { text: 'accordion' }],
    }
  },
  methods: {
    showUrl() {
      console.log('url prim', this.url)
    },
  },
}
</script>
