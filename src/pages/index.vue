<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-main class="pt-0">
      <v-carousel cycle="true" interval="2000">
          <!-- 輪播內容 -->
          <v-carousel-item cover v-for="(item, index) in carouselItems" :src="item.imageUrl" :key="index">
          </v-carousel-item>
      </v-carousel>
      <v-container>
          <h2>最新消息</h2>
          <v-row>
              <v-col v-for="(info, index) in information" :key="index" cols="12" md="4">
                  <v-card link :href="info.to">
                      <v-img cover :src="info.imageUrl" height="200"></v-img>
                      <v-card-title>{{ info.name }}</v-card-title>
                      <v-card-text>{{ info.description }}</v-card-text>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
  </v-main>
</template>

<script>
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
                  name: "金質獎",
                  description: "2023金質獎",
                  imageUrl: "/src/assets/carousel1.jpg",
                  to: "/news1",
              },
              {
                  name: "獎狀",
                  description: "2023獎狀",
                  imageUrl: "/src/assets/carousel2.jpg",
                  to: "/news2",
              },
              {
                  name: "尾牙",
                  description: "2023尾牙",
                  imageUrl: "/src/assets/carousel3.jpg",
                  to: "/news3",
              },
          ],
      };
  },
};
</script>