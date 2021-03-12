<template>
  <div id="example">
    <div>{{ message }}</div>
    <div>{{ reversedMessage }}</div>
  </div>
</template>

<script>
export default {
  name: 'computed',
  data() {
    return {
      message: 'hello',
    }
  },
  computed: {
    reversedMessage: function() {
      return this.message
        .split('')
        .reverse()
        .join('')
    },
  },
}
</script>
