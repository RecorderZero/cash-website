<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-main class="pt-0">
      <v-carousel cycle=true interval="2000">
          <!-- 輪播內容 -->
          <v-carousel-item cover v-for="(item, index) in carouselItems" :src="item.imageUrl" :key="index">
          </v-carousel-item>
      </v-carousel>
      <v-container>
          <h2>最新消息</h2>
          <v-row>
              <v-col v-for="(info, index) in information" :key="index" cols="12" sm="6" md="4">
                  <v-card link :to="info.class + '/' + info.id">
                      <v-img cover :src="info.imageUrl" height="200"></v-img>
                      <v-card-title>{{ info.name }}</v-card-title>
                      <v-card-text>{{ info.description }}</v-card-text>
                  </v-card>
              </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
          <v-btn to="/news">
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
                      v-bind="props">
                      <v-img :src="project.imageUrl" cover @click="navigator()"></v-img>
                    </v-card>
                  </v-hover>
                  <!-- <v-row><v-img :src="project.imageUrl" @click="navigator('test')"></v-img></v-row> -->
                  <v-row class="pa-6" justify="center"><h3>{{ project.name }}</h3></v-row>
              </v-col>
          </v-row>
      </v-container>
  </v-main>
</template>

<script>
import router from '@/router';

export default {
  data() {
      return {
          carouselItems: [
              { imageUrl: "/src/assets/carousel1.jpg" },
              { imageUrl: "/src/assets/carousel2.jpg" },
              { imageUrl: "/src/assets/carousel3.jpg" },
          ],
          information: [
              {
                    id: 1,
                  name: "金質獎",
                  description: "2023金質獎",
                  imageUrl: "/src/assets/carousel1.jpg",
                  class: "news",
              },
              {
                    id: 2,
                  name: "獎狀",
                  description: "2023獎狀",
                  imageUrl: "/src/assets/carousel2.jpg",
                  class: "news",
              },
              {
                    id: 3,
                  name: "尾牙",
                  description: "2023尾牙",
                  imageUrl: "/src/assets/carousel3.jpg",
                  class: "news",
              },
          ],
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
    navigator() {
      router.push({ name: 'ProjectsOverview' })
    },
  },
};

</script>

