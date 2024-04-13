<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-main>
    <!-- use $route.params.id to get data from api -->
    <!-- <v-container>
        <v-carousel cycle=true interval="2000"> -->
          <!-- 輪播內容 -->
          <!-- <v-carousel-item cover v-for="(img, index) in item.imageUrl" :src="img" :key="index">
          </v-carousel-item>
        </v-carousel>
    </v-container> -->
      <!-- <h1> Welcome to News page </h1>
      <p>This is the news that opens on <strong>/news/{{ $route.params.id }}</strong> route</p> -->
      <v-container v-if="item">
        <v-row>
        <h1>{{ item.title }}</h1>
        </v-row>
        <br><br>
        <v-row>
        <p>{{ item.content }}</p>
        </v-row>
        <br><br>
        <v-row>
        <v-btn @click="$router.go(-1)">回到上一頁</v-btn>
        </v-row>
      </v-container>
      <v-container v-else>
        <p>Loading</p>
      </v-container>
      <!-- {{ item }} -->
</v-main>
  </template>

<script>
import axios from 'axios'
export default {
    
    created() {
        axios
            .get('http://127.0.0.1:8000/new/' + this.$route.params.id + '/')
            .then(response => (this.item = response.data))
    },
    data() {
        return {
            item: null,
        }
    },
    // computed: {
    //     searching() {
    //         return this.news.filter(item => {
    //             return item.id == this.$route.params.id;
    //         })
    //     },
    // },
    // data() {
    //     return {
    //         news: [
    //             {
    //             "id": 1,
    //             "title": "2024金質獎",
    //             "content": "團隊獲得金質獎",
    //             "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
    //             "class": "honor",
    //             },
    //             {
    //             "id": 2,
    //             "title": "2024尾牙",
    //             "content": "尾牙大獎一台汽車",
    //             "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
    //             "class": "activity",
    //             },
    //             {
    //             "id": 3,
    //             "title": "河濱公園竣工",
    //             "content": "河濱公園很漂亮",
    //             "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
    //             "class": "completed",
    //             },
    //             {
    //             "id": 4,
    //             "title": "杜拜遊",
    //             "content": "杜拜好熱",
    //             "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
    //             "class": "activity",
    //             },
    //             {
    //             "id": 5,
    //             "title": "榮升董事長",
    //             "content": "董事長好多會議要開",
    //             "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
    //             "class": "honor",
    //             },
    //             {
    //             "id": 6,
    //             "title": "水壩竣工",
    //             "content": "從此台北不缺水",
    //             "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
    //             "class": "completed",
    //             },
    //             {
    //             "id": 7,
    //             "title": "花園竣工",
    //             "content": "民眾有個遊憩好地方",
    //             "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
    //             "class": "completed",
    //             },
    //             {
    //             "id": 8,
    //             "title": "2023金質獎",
    //             "content": "第二次獲得金質獎",
    //             "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
    //             "class": "honor",
    //             },
    //             {
    //             "id": 9,
    //             "title": "日本櫻花行",
    //             "content": "今年櫻花特別多",
    //             "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
    //             "class": "activity",
    //             },
    //             {
    //             "id": 10,
    //             "title": "歐洲建築參訪",
    //             "content": "大理石的建築相當宏偉",
    //             "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
    //             "class": "activity",
    //             },
    //         ],
    //     };
    // },
}
</script>