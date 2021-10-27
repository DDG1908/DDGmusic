<template>
  <div>
    <el-carousel :interval="3000" type="card" height="100px" indicator-position="none" arrow="never">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
          <img :src="item.pic" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    name: 'swiper',
    data(){
        return{
            banners: [],
            screenWidth: 0,
        }
    },
    created(){
        this.getBanner()
    },
    methods:{
        getBanner(){
            this.$api('/banner?type=2').then(res => {
              // console.log(res.data);
                this.banners = res.data.banners
            })
        },
        setSize:function () {
          // 通过浏览器宽度(图片宽度)计算高度
          this.bannerHeight = 400 / 1920 * this.screenWidth;
        },
    },
    mounted() {
        // 首次加载时,需要调用一次
        this.screenWidth =  window.innerWidth;
        this.setSize();
        // 窗口大小发生改变时,调用一次
        window.onresize = () =>{
        this.screenWidth =  window.innerWidth;
        this.setSize();
      }
    }
}
</script>

<style lang="less" scoped>

  .el-carousel__item img {
    width: 100%;
    height:inherit;
  }
</style>