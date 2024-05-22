<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-main class="pt-0">
    <!-- use $route.params.id to get data from api -->
    <v-container v-if="item" class="pa-0 fill-height" fluid>
        <v-container v-if="mobile.mobile" class="fill-height" fluid>
        <v-carousel :cycle=true interval="3000" hide-delimiter-background style="height: 300px;" fluid>
            <template v-slot:prev="{ props }">
            <v-btn @click="props.onClick" elevation="0" icon="mdi-arrow-left" style="background-color: rgba(0, 0, 0, 0);"
              ></v-btn>
          </template>
          <template v-slot:next="{ props }">
            <v-btn @click="props.onClick" elevation="0" icon="mdi-arrow-right" style="background-color: rgba(0, 0, 0, 0);"
              ></v-btn>
          </template>
          <!-- 輪播內容 -->
          <v-carousel-item v-for="(img, index) in item.image_urls" :src="img" :key="index">
          </v-carousel-item>
        </v-carousel>
      <!-- <h1> Welcome to News page </h1>
      <p>This is the news that opens on <strong>/news/{{ $route.params.id }}</strong> route</p> -->
        <br><br>
        <v-row>
        <h1>{{ item.title }}</h1>
        </v-row>
        <br><br><br>
        <v-row>
        <p v-html="item.content"></p>
        </v-row>
        <!-- <br><br>
        <v-row>
            <v-divider class="border-opacity-50"></v-divider>
            <v-icon icon="mdi-map-marker"></v-icon><p>{{ '地點：' + item.location }}</p>
        </v-row>
        <v-row>
            <v-icon icon="mdi-calendar-check"></v-icon><p>{{ '執行期間：' + item.startDate + '~' + item.endDate }}</p>
        </v-row>
        <br><br> -->
        <v-row>
        <v-btn @click="$router.go(-1)">回到上一頁</v-btn>
        </v-row>
        </v-container>
        <v-container v-if="!mobile.mobile"  class="fill-height" fluid>
            <v-row>
                <v-col cols="6">
                    <v-carousel :cycle=true interval="3000" hide-delimiter-background fluid>
                        <template v-slot:prev="{ props }">
                        <v-btn @click="props.onClick" elevation="0" icon="mdi-arrow-left" style="background-color: rgba(0, 0, 0, 0);"
                        ></v-btn>
                    </template>
                    <template v-slot:next="{ props }">
                        <v-btn @click="props.onClick" elevation="0" icon="mdi-arrow-right" style="background-color: rgba(0, 0, 0, 0);"
                        ></v-btn>
                    </template>
                    <!-- 輪播內容 -->
                    <v-carousel-item v-for="(img, index) in item.image_urls" :src="img" :key="index">
                    </v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col cols="6" class="pt-6">
                    <h1>{{ item.title }}</h1>
                    <br>
                    <p v-html="item.content"></p>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
    <v-container v-else>
        <p>Loading</p>
    </v-container>
</v-main>
  </template>

<script>
import http from "../http-common"
import { useDisplay } from 'vuetify';

export default {
    
    created() {
        http.get('/get_project_with_images/' + this.$route.params.id + '/')
            .then(response => {
                this.item = response.data;
                this.item.content = this.item.content.replaceAll('\n', '<br>')
                // console.log(this.item)
            })
            // .then(() => {
            //     // console.log(this.item.employee)
            //     const employees = JSON.parse(this.item.employee)
            //     // console.log("employees:" + employees)
            //     for(let x = 0; x < employees.length; x++) {
            //         // console.log("employees[" + x + ']'+ employees[x])
            //         this.employees.push(employees[x].fields.name)
            //         // console.log(this.employees)
            //     }
            // })
            .catch(error => {
                console.log(error);
            })
        // http.get('/get_project_with_images/' + this.$route.params.id + '/')
        //     .then(response => {
        //         this.item = response.data;
        //         // 獲取員工
        //         return Promise.all(this.item.employee.map(employeeId => {
        //             return http.get('/employee/'+employeeId+'/');
        //         }));
        //     })
        //     .then(employeeResopnses => {
        //         // 處理員工響應
        //         this.employees = employeeResopnses.map(response => response.data.name);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    },
    data() {
        return {
            // employees: [],
            mobile: useDisplay(),
            item: null,
        }
    },
}
</script>