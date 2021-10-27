<template>
  <div>
    <aplayer autoplay :music=music :showlrc="true" v-if="music.url != ''"></aplayer>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
    components:{ Aplayer },
    name: 'play',
    data(){
        return{
          url: '',
          id: '33894312',
          music: {
            title: 'DDG music',
            author: '大大怪',
            url: '',
            pic: '',
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer',
          },
        }
    },
    created(){
        this.getplayurl()
    },
    methods:{
        getplayurl(){
          let playUrl = new Promise((resolve,reject) => {
            this.$api('/song/url?id=' + this.id).then(res => {
              resolve(res.data)
            })
          })
          let lrc = new Promise((resolve,reject) => {
            this.$api('/lyric?id=' + this.id).then(res => {
              resolve(res.data)
            })
          })
          Promise.all([playUrl,lrc]).then(res => {
            console.log(res);
            this.$set(this.music,'lrc',res[1].lrc.lyric)
            this.$set(this.music,'url', res[0].data[0].url)
          })
          // this.$api('/song/url?id=33894312').then(res => {
          //     console.log(res.data);
          //     this.$set(this.music,'url',res.data.data[0].url)
          //     console.log(this.music);
          //     // location.reload()
          // })
        }
    }
}
</script>

<style>

</style>