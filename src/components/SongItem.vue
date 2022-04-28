<template>
  <van-cell :title="name"
            :label="author+'  '+name"
            center
            @click="$router.push({path:'/comment',query:{id:id}})"
  >
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon class="search-icon">
      <van-icon name="play-circle-o" size="25px" @touchstart="playFn"/>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: "SongItem",
  props: {
    name: String, // 歌名
    author: String, // 歌手
    id: Number, // 歌曲id (标记这首歌曲-为将来跳转播放页做准备)
  },
  methods: {
    playFn() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id // 歌曲id, 通过路由跳转传递过去
        }
      })
    }
  }
};
</script>

<style scoped>
.search-icon {
  font-size: 16px;
  line-height: inherit;
  font-weight: bold;
}
</style>