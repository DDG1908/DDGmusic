
<template>
  <div class="input-search">
    <el-autocomplete
      class="inline-input"
      v-model="keywords"
      :fetch-suggestions="backAdvice"
      placeholder="搜索"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>
<script>
  export default {
    name: 'search',
    props:{

    },
    data() {
      return {
        keywords: ''
      };
    },
    methods: {
      backAdvice(queryString, cb) {
        // 调用 callback 返回建议列表的数据
        this.$api('/search/suggest?keywords=' + this.keywords + '&type=mobile').then(res =>{
          console.log(res.data);
          let songsAd = res.data.result.allMatch
          songsAd.forEach(item => {
            item.value = item.keyword
            cb(songsAd);
          });
        })
      },
      handleSelect(item) {
        this.keywords = item.keyword
      }
    },
  }
</script>

<style lang="less" scoped>
/* .input-search{
  width: 80%;
  height: 25px;
} */
.inline-input{
  margin-top: 10px;
  text-align: center;
}
/deep/ .inline-input input{
  height: 30px;
  width: 80%;
  text-align: center;
  border: none;
  border: 2px solid pink;
  border-radius: 15px;
}
.el-autocomplete{
  display: block;
}
</style>