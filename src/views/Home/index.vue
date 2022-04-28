<template>
  <div>
    <p class="title">推荐歌单</p>
    <div>
      <van-row gutter="10">
        <van-col span="8" v-for="obj in recommendList" :key="obj.id">
          <van-image
              width="100%"
              height="3rem"
              :src="obj.picUrl"
          />
          <p class="song_name">{{ obj.name }}</p>
        </van-col>
      </van-row>

    </div>
    <p class="title">最新音乐</p>
    <song-item v-for="obj in NewList" :key="obj.id"
               :name="obj.name"
               :author="obj.song.artists[0].name"
               :id="obj.id"
    >
    </song-item>
  </div>
</template>

<script>
import {recommendMusicAPI, newMusicAPI} from '@/api'
import SongItem from "@/components/SongItem";

export default {
  components: {SongItem},
  data() {
    return {
      recommendList: [],//推荐歌单
      NewList: []
    }
  },
  async created() {
    const res = await recommendMusicAPI({limit: 6})
    console.log(res)
    this.recommendList = res.data.result

    const songRes = await newMusicAPI({limit: 10})
    console.log(songRes);
    this.NewList = songRes.data.result
  },
  comments: {
    SongItem
  },
  name: "index"
}
</script>

<style scoped lang="less">


/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}

.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
  font-weight: bold;
}

</style>