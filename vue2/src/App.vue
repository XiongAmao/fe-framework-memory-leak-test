<template>
  <div class="App">
    <div>
      <br>
      <button @click="fff">切换</button>
    </div>
    <br>
    <br>
    <test v-if="status" :key="key"/>
    
  </div>
</template>

<script>
  import Test from './TestA.vue'

  export default {
    name: 'App',
    components: { Test },
    props: {},
    data() {
      return {
        status: true,
        key: 123
      }
    },
    created() {},
    methods: {
      fff() {
        this.key++
        this.status = !this.status
      },
    },
  }
</script>

<style scoped>
  .App {
  }
</style>
