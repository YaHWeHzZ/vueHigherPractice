<template>
  <div>
    <div>
      <ul>
        <li>
          <slot name="todoSlot" :filteredTodos="filteredTodos">
            <!-- 后备内容 -->
            in father: {{ todo.text }}
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filteredTodos: [{ text: 'piano' }, { text: 'guitar' }],
    }
  },
}
</script>
