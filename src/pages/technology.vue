<!-- eslint-disable vue/multi-word-component-names -->
<template>
<v-main class="pa-0">
  <v-container>
    <v-row>
      <v-col class="text-center" cols="12" sm="6" md="3" v-for="(technology, index) in technologys" :key="index">
        <v-img :src="technology.imageUrl"></v-img>
          <h3>{{ technology.name }}</h3>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script>
export default {
  data() {
    return {
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
