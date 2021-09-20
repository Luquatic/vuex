<template>
  <button v-if="!isAuthenticated" @click="login({auth: true})">Login</button>
  <button v-else @click="logout({auth: false})">Logout</button>
</template>

<script>
  import {defineComponent} from "vue";
  import {mapActions} from "vuex";

  export default defineComponent({
    name: 'Auth',
    methods: {
      ...mapActions(['login', 'logout'])
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      }
    }
  })
</script>
