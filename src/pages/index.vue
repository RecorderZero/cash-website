<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-main class="pt-0">
      <v-container v-if="!carouselItems">
          跑馬燈加載中
      </v-container>
      <v-container v-else class="pa-0 fill-height" fluid>
         <v-carousel cycle interval="3000" fluid hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in carouselItems"
            :key="i"
            :src="item.imageUrl"
            fluid
          >
                    <v-container
                      class="fill-height pa-0 ma-0 pb-3" fluid
                    >
                      <v-layout class="fill-height align-end pb-4 mb-4">
                          <v-card color="rgba(255,255,255,0.4)" elevation="0" class="pa-2">
                          <v-icon>mdi-map-marker</v-icon><span class="headline black--text" v-text="item.location"></span><br />
                          <v-icon>mdi-calendar</v-icon><span class="headline black--text" v-text="item.date"></span>
                          </v-card>
                      </v-layout>
                    </v-container>
             </v-carousel-item>
           </v-carousel>
    </v-container>
      <!-- <v-container>
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
      </v-container> -->
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
    navigator(category) {
      router.push({ name: 'ProjectsOverview' , params: category})
    },
  },
  created() {
    http.get('/get_valid_carousel?source=front')
        .then(response => this.carouselItems = response.data)
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

