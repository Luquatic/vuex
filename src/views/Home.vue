<template>
  <div class="home container" v-if="isAuthenticated">
    <counter></counter>
    <button @click="increment">Add 1</button>
    <button @click="increase({amount: 10})">Add 10</button>
  </div>
  <div class="auth container">
    <auth></auth>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

// components
import Counter from "@/components/Counter.vue";
import Auth from '@/components/Auth.vue';

// vuex
import {mapActions} from "vuex";

export default defineComponent({
  name: 'Home',
  components: {Counter, Auth},
  methods: {
    // increment() {
    //   this.$store.dispatch('increment');
    // },
    // increase(amount: number) {
    //   this.$store.dispatch({
    //     type: 'increase',
    //     amount
    //   });
    // },
    ...mapActions(['increment', 'increase'])
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  }
});
</script>

<style lang="scss">
.container {
  padding: 20px;
}
</style>
