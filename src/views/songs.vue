<template>
  <div>
      <div>
          <search></search>
      </div>
      <div class="swiper">
          <swiper></swiper>
      </div>
  </div>
</template>

<script>
import search from '../components/search.vue'
import Swiper from '../components/swiper.vue'
export default {
  components: { search, Swiper },
  data(){
      return{

      }
  },
  created(){
      
  },
  methods:{

  }

}
</script>

<style>
.swiper{
  margin-top: 20px;
}
</style>