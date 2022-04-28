<template>
  <div>
    <van-search v-model="searchValue" shape="round" placeholder="请输入搜索关键词"/>

    <div class="search_wrap">

    </div>

    <div class="hot_name_wrap" v-if="resultList.length===0">
      <p class="hot_title"> 热门搜索</p>
      <!-- 每个搜索关键词 -->
      <li
          class="hot_item"
          v-for="(obj,index) in hotList "
          :key="index"
          @click="btn(obj.first)"
      >
        {{ obj.first }}
      </li>

    </div>

    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <song-item v-for="obj in resultList" :key="obj.id"
                 :name="obj.name"
                 :author="obj.ar[0].name"
                 :id="obj.id"
      >
      </song-item>
    </div>
  </div>
</template>

<script>
import {hotSearchAPI, searchResultAPI} from "@/api";
import SongItem from "@/components/SongItem";
export default {
  name: "index",
  data() {
    return {
      searchValue: "",
      hotList: [],//热搜关键字,
      resultList: [],//热门搜索
      timer: null //保存定时器
    }
  },
  components:{
    SongItem
  },
  async created() {
    const res = await hotSearchAPI()
    console.log(res)
    this.hotList = res.data.result.hots
  },
  methods: {
    async btn(str) {
      this.searchValue = str
      const res = await searchResultAPI({
        type: 1,
        keywords: this.searchValue
      });
      this.resultList = res.data.result.songs;
     setTimeout(()=>{
       clearTimeout(this.timer)
     })//防止下面的请求再次执行

    },

  },
  watch: {
    async searchValue(val) {
      clearTimeout(this.timer) //防止输入框空，还进行请求
      if (val.length === 0) return this.resultList = [] //判断输入框无值
      this.timer = setTimeout(async () => {
        const res = await searchResultAPI({
          type: 1,
          keywords: val
        });
        this.resultList = res.data.result.songs;
      }, 600)
    },
  }
}
</script>

<style scoped>
/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/*搜索容器的样式*/
.search_wrap {
  padding: 0.266667rem;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>