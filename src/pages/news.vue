<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-main class="pa-0">
      <v-container v-if="item" class="pa-0 fill-height" fluid>
        <v-carousel :cycle=true interval="3000" hide-delimiter-background>
          <template v-slot:prev="{ props }">
            <v-btn @click="props.onClick" elevation="0" icon="mdi-arrow-left" style="background-color: rgba(0, 0, 0, 0);"
              ></v-btn>
          </template>
          <template v-slot:next="{ props }">
            <v-btn @click="props.onClick" elevation="0" icon="mdi-arrow-right" style="background-color: rgba(0, 0, 0, 0);"
              ></v-btn>
          </template>
          <!-- 輪播內容 -->
          <v-carousel-item alt="carousel" v-for="(img, index) in item.image_urls" :src="img" :key="index">
        </v-carousel-item>
        </v-carousel>
        <v-container>
        <v-row>
        <v-btn @click="$router.go(-1)">回到上一頁</v-btn>
        </v-row>
      </v-container>
      </v-container>
      <v-container v-else>
        <p>Loading</p>
      </v-container>
      <!-- {{ item }} -->
    </v-main>
  </template>

<script>
import http from "../http-common"

export default {
    
    created() {
        http.get('get_new_with_images/' + this.$route.params.id + '/')
            .then(response => this.item = response.data)
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
    },
    data() {
        return {
            item: null,
            message: null,
        }
    },
}
</script>