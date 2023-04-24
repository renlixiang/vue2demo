<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {

  },
    data() {
      return {
          // mouseStyleFlag: this.$store.state.mouseStyleFlag
      }
    },
    mounted() {
        // this.$fireworks()
        // this.$cobweb()
        // this.$benevolence()
        // this.$randomWrite()
        // this.$petal()
        let mouseStyleFlag = localStorage.getItem('mouseStyleFlag')
        console.log(this.mouseStyleFlag)
        switch (mouseStyleFlag) {
            case 'none': break;
            case 'benevolence': this.$benevolence(); break;
            case 'randomWrite': this.$randomWrite(); break;
            case 'firework': this.$fireworks(); break;
        }
    },
    methods: {

    },
    watch: {

    }
}
</script>

<style>

#app {

    height: 100vh;
    width: 100%;

}

body {
    margin: 0;
    padding: 0;
}

</style>
