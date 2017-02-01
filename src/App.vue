<template>
  <div id="app">
    <Nheader></Nheader>

    <main>
      <router-view></router-view>
    </main>

    <Nfooter></Nfooter>
  </div>
</template>

<script>
import Nheader from './components/Nheader/Nheader.vue'
import Nfooter from './components/Nfooter/Nfooter.vue'

export default {
  name: 'app',
  components: {
    Nheader,
    Nfooter
  }
}
</script>

<style src="./assets/css/app.css"></style>
