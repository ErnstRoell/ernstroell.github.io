
<script>
import { ref } from 'vue'

const count = ref(0)
export default {
  name: 'ButtonCounter',
  props: {
    msg: String
  }
}
</script>


<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>