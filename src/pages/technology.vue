<!-- eslint-disable vue/multi-word-component-names -->
<template>
<v-main class="pa-0">
  <v-container v-if="mobile.mobile">
    <v-row>
      <v-col class="text-center pa-10" cols="12" sm="6" md="3" v-for="(technology, index) in technologys" :key="index">
        <router-link :to="'/%E5%B7%A5%E7%A8%8B%E5%AF%A6%E7%B8%BE/category/' + technology.code">
        <v-img :src="technology.imageUrl">
        </v-img>
         </router-link>
          <h3>{{ technology.name }}</h3>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-row>
      <v-col class="text-center pa-10" cols="12" sm="6" md="3" v-for="(technology, index) in technologys" :key="index">
        <v-hover v-slot="{ isHovering, props }">
        <v-img :src="technology.imageUrl" v-bind="props">
          <router-link :to="'/%E5%B7%A5%E7%A8%8B%E5%AF%A6%E7%B8%BE/category/' + technology.code">
          <v-expand-transition>
          <div
              v-if="isHovering"
              class="d-flex align-center text-white justify-center transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              了解更多
            </div>
        </v-expand-transition></router-link></v-img>
        
        </v-hover>  
          <h3>{{ technology.name }}</h3>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script>
import { useDisplay } from 'vuetify';
export default {
  data() {
    return {
      mobile: useDisplay(),
      technologys: [
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
    }
  }
}
</script>
