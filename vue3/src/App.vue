<template>
  <div class="App">
    <div>
      <button @click="fff">切换</button>
    </div>
    <br />
    <br />
    <sub-page
      v-if="status"
      :key="key"
    />
  </div>
</template>

<script>
  import SubPage from './SubPage.vue'

  export default {
    name: 'App',
    components: { SubPage },
    props: {},
    data() {
      return {
        status: true,
        key: 123,
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
