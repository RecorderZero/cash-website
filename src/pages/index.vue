<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>
<template>
  <v-main class="pt-0">
      <v-container v-if="!carouselItems">
          Loading
      </v-container>
      <v-container v-else class="pa-0 fill-height" fluid>
         <v-carousel cycle interval="3000" fluid hide-delimiter-background>
          <template v-slot:prev="{ props }">
            <v-btn @click="props.onClick" elevation="0" icon="mdi-arrow-left" style="background-color: rgba(0, 0, 0, 0);"
              ></v-btn>
          </template>
          <template v-slot:next="{ props }">
            <v-btn @click="props.onClick" elevation="0" icon="mdi-arrow-right" style="background-color: rgba(0, 0, 0, 0);"
              ></v-btn>
          </template>
          <v-carousel-item
            v-for="(item,i) in carouselItems"
            :key="i"
            :src="item.image"
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
    <v-container name="news">
    <h2 align="center" class="pb-5">✦最新消息✦</h2>
    <v-row justify="space-around">
      <v-col v-for="(item, index) in news" :key="index" cols="12">
        <div v-if="!mobile.xs" class="rounded-pill mx-auto" style="height: 50px; width: 80%; background-color: #c3c7c8; position: relative;">
            <span style="position: absolute;transform: translate(20%,50%);">{{item.date}}</span>
          <div class="rounded-pill mx-auto d-flex justify-center" style="position: absolute;bottom: 0px; right: 0px; height: 50px; width: 80%; background-color: #687A86;">
            <span style="position: absolute;transform: translateY(50%); overflow: hidden;"><router-link :to="'/%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF/details/' + item.id + '/'" style="color: #000000;">{{item.title}}</router-link></span>
          </div>
        </div>
        <div v-else class="rounded-pill mx-auto pl-3" style="height: 50px; width: 100%; background-color: #c3c7c8; position: relative;">
            <span style="position: absolute;transform: translate(20%,50%);">{{item.date}}</span>
          <div class="rounded-pill mx-auto d-flex justify-center" style="position: absolute; right: 0px; height: 50px; width: 80%; background-color: #687A86;">
            <span style="position: absolute;transform: translateY(50%);"><router-link :to="'/%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF/details/' + item.id + '/'" style="color: #000000;">{{item.title}}</router-link></span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
    <v-container name="awards">
      <h2 align="center">✦精選獲獎✦</h2>
      <v-row>
              <v-col v-for="(award, index) in awards" :key="index" cols="12" sm="6" md="3">
                  <v-card 
                      elevation='2'
                      class="rounded-xl"
                      :to="encodeURI(award.link)"
                      >
                      <v-img :src="award.image" height="200px"></v-img>
                    </v-card>
                  <h3 align="center" class="pa-2">{{ award.title }}</h3>
              </v-col>
          </v-row>
    </v-container>
      <v-container>
          <h2 align="center">✦工程實績✦</h2><br>
          <v-row>
              <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="3">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card 
                      :elevation="isHovering ? 12 : 2"
                      v-bind="props"
                      class="rounded-xl"
                      >
                      <v-img :src="project.imageUrl" height="200px" @click="navigator(project.code)"></v-img>
                    </v-card>
                  </v-hover>
                  <h3 align="center" class="pa-2">{{ project.name }}</h3>
              </v-col>
          </v-row>
      </v-container>
      <v-container v-if="mobile.mobile">
        <h2 align="center" class="pb-6">✦服務項目✦</h2>
        <v-row>
          <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="3" align="center">
                <v-avatar size="200">
                <v-img :src="project.imageUrl" @click="navigator(project.code)"></v-img>
              </v-avatar>
            <h3 class="pa-2">{{ project.name }}</h3>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <h2 align="center" class="pb-6">✦服務項目✦</h2>
        <v-row>
          <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="3" align="center">
            <v-hover v-slot="{ isHovering, props }">
                <v-avatar size="200" v-bind="props">
                <v-img :src="project.imageUrl" @click="navigator(project.code)"><v-expand-transition>
          <div
              v-if="isHovering"
              class="d-flex align-center text-white justify-center transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              了解更多
            </div>
        </v-expand-transition></v-img>
              </v-avatar>
            </v-hover> 
            <h3 class="pa-2">{{ project.name }}</h3>
          </v-col>
        </v-row>
      </v-container>
  </v-main>
</template>

<script>
import router from '@/router';
import http from '../http-common'
import { useDisplay } from 'vuetify';


export default {
  
  data() {
      return {
          mobile: useDisplay(),
          carouselItems: [],
          news: [],
          projects: [
            {
              name: "道路工程",
              code: "%E9%81%93%E8%B7%AF%E5%B7%A5%E7%A8%8B",
              imageUrl: "/src/assets/road.jpg",
              // class: "road",
            },
            {
              name: "大地工程",
              code: "%E5%A4%A7%E5%9C%B0%E5%B7%A5%E7%A8%8B",
              imageUrl: "/src/assets/land.jpg",
              // class: "land",
            },
            {
              name: "水利工程",
              code: "%E6%B0%B4%E5%88%A9%E5%B7%A5%E7%A8%8B",
              imageUrl: "/src/assets/water.jpg",
              // class: "water",
            },
            {
              name: "水保工程",
              code: "%E6%B0%B4%E4%BF%9D%E5%B7%A5%E7%A8%8B",
              imageUrl: "/src/assets/water.jpg",
              // class: "water",
            },
            {
              name: "景觀工程",
              code: "%E6%99%AF%E8%A7%80%E5%B7%A5%E7%A8%8B",
              imageUrl: "/src/assets/view.jpg",
              // class: "view",
            },
          ],
          awards: [],
      };
  },
  methods: {
    navigator(category) {
      router.push({ path: '/%E5%B7%A5%E7%A8%8B%E5%AF%A6%E7%B8%BE/category/' + category })
    },
  },
  created() {
    http.get('carouselimage/?displayornot=true')
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
        http.get('/new/?num=6')
            .then(response => {
              this.news = response.data.map(item => {
                if (this.mobile.xs) {
                  if (item.title.length > 15) {
                    item.title = item.title.slice(0, 15) + '...'; // 将超过15个字符的标题截断并添加省略号
                  }
                  const date = item.date.split('-')
                  item.date = date[1] + '-' + date[2]
                }
                return item;
              });
            })
            .catch(error => console.log(error));
        http.get('/chosenaward/')
            .then(response => this.awards = response.data)
            .catch(error => console.log(error))
  },
};

</script>
