<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-main class="pt-0">
      <v-container v-if="!carouselItems">
          跑馬燈加載中
      </v-container>
      <v-container v-else>
      <v-carousel :cycle=true interval="3000">
          <!-- 輪播內容 -->
          <v-carousel-item v-for="(item, index) in carouselItems" :src="item" :key="index">
          </v-carousel-item>
      </v-carousel>
    </v-container>
      <v-container>
          <h2>最新消息</h2>
          <v-row>
              <v-col v-for="(info, index) in news" :key="index" cols="12" sm="6" md="4">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card 
                      :elevation="isHovering ? 12 : 2"
                      v-bind="props"
                      link
                      :to="'news/' + info.id"
                      >
                      <v-img :src="info.imageUrl" height="200"></v-img>
                      <v-card-text><v-icon icon="mdi-timer-edit-outline"></v-icon>{{ info.date }}</v-card-text>
                      <v-card-title>{{ info.title }}</v-card-title>
                    </v-card>
                  </v-hover>
              </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
          <v-btn to="/news?class=全部">
            更多消息
          </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
          <h2>工程實績</h2><br>
          <v-row>
              <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="4">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card 
                      :elevation="isHovering ? 12 : 2"
                      v-bind="props"
                      >
                      <v-img :src="project.imageUrl" height="200px" @click="navigator(project.name)"></v-img>
                    </v-card>
                  </v-hover>
                  <v-row class="pa-6" justify="center"><h3>{{ project.name }}</h3></v-row>
              </v-col>
          </v-row>
      </v-container>
  </v-main>
</template>

<script>
import router from '@/router';
import http from '../http-common'

export default {
  data() {
      return {
          carouselItems: [],
          news: [],
          projects: [
            {
              id: 1,
              name: "道路工程",
              imageUrl: "/src/assets/road.jpg",
              class: "road",
            },
            {
              id: 2,
              name: "大地工程",
              imageUrl: "/src/assets/land.jpg",
              class: "land",
            },
            {
              id: 3,
              name: "景觀工程",
              imageUrl: "/src/assets/view.jpg",
              class: "view",
            },
            {
              id: 4,
              name: "水利工程",
              imageUrl: "/src/assets/water.jpg",
              class: "water",
            },
          ],
      };
  },
  methods: {
    navigator(classification) {
      router.push({ name: 'ProjectsOverview' , query: {class: classification}})
    },
  },
  created() {
    http.get('/get_valid_carousel?source=front')
        .then(response => this.carouselItems = response.data.image_urls)
        .catch(error => {
          if (error.response) {
            // 在控制台顯示後端返回的詳細錯誤訊息
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            // 將錯誤訊息顯示在用戶界面上
            this.message = error.response.data.detail || '發生了未知錯誤';
          } else {
            // 處理其他類型的錯誤
            console.error('錯誤訊息:', error.message);
          }
        })
    http.get('/new?num=6')
        .then(response => this.news = response.data)
        .catch(error => console.log(error))
  },
};

</script>

