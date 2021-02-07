<template>
  <div>
    <slot name="title"></slot>
    <h1>I am the form Helper</h1>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style scoped>
h1{
color: red;
}
</style>
