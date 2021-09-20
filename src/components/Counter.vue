<template>
  <h3>{{ counter }}</h3>
</template>

<script>
  import {defineComponent} from "vue";

  export default defineComponent({
    name: 'Counter',
    computed: {
      counter() {
        return this.$store.getters.counter;
      }
    },
  })
</script>
