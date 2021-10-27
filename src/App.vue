<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" tag="div">我的</router-link>
      <router-link to="/songs" tag="div">乐库</router-link>
    </div>
    <router-view/>
    <div class="play"><paly></paly></div>
  </div>
</template>

<script>
import paly from './components/paly.vue'
export default {
  components: { paly },
  
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#nav{
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
  background-color: pink;
}
.play{
  position: fixed;
  bottom: 40px;
  width: 100%;
}
</style>
