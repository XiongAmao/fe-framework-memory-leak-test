<template>
  <div>
    <button
      class="button"
      @click="start"
    >开始</button>

    <div>text: {{ wtf }}</div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: {},
    data() {
      return {
        wtf: 11,
        list: [],
        timer: null,
      }
    },
    created() {
      const list = []
      for (let i = 0; i < 10000; i++) {
        list.push({
          label: 'Item ' + i,
          value: i,
        })
      }
      this.list = list
    },
    destroyed() {
      // 对比使用这个跟不使用的区别
      // clearTimeout(this.timer)
    },
    methods: {
      start() {
        console.log('start')
        this.timer = setTimeout(() => {
          console.log(this)
          this.wtf += 99
        }, 2000)
      },
    },
  }
</script>
