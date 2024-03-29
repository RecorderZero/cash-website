<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-main>
    <!-- button filter -->
    <v-container>
      <v-btn-toggle v-model="filter" mandatory="force" variant="outlined">
        <v-btn v-for="category in categories" :key="category.value" :text="category.text" :value="category.value"></v-btn>
      </v-btn-toggle>
    </v-container>
    <!-- 顯示 -->
    <v-container>
      <v-row>
        <v-col v-for="info in displayedNews" :key="info.id" cols="12" sm="6" md="4">
          <v-card link :href="'news' + info.id">
            <v-img cover :src="info.imageUrl" height="200"></v-img>
            <v-card-title>{{ info.title }}</v-card-title>
            <v-card-text> {{ info.content }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination v-model="page" :length="Math.ceil(totalNews / perPage)"></v-pagination>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          text: "全部",
          value: "all",
        },
        {
          text: "活動",
          value: "activity",
        },
        {
          text: "榮譽",
          value: "honor",
        },
        {
          text: "竣工",
          value: "completed",
        },
      ],
      filter: null,
      page: 1,
      perPage: 5,
      news: [
        {
          "id": 1,
          "title": "2024金質獎",
          "content": "團隊獲得金質獎",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "honor",
        },
        {
          "id": 2,
          "title": "2024尾牙",
          "content": "尾牙大獎一台汽車",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "activity",
        },
        {
          "id": 3,
          "title": "河濱公園竣工",
          "content": "河濱公園很漂亮",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "completed",
        },
        {
          "id": 4,
          "title": "杜拜遊",
          "content": "杜拜好熱",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "activity",
        },
        {
          "id": 5,
          "title": "榮升董事長",
          "content": "董事長好多會議要開",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "honor",
        },
        {
          "id": 6,
          "title": "水壩竣工",
          "content": "從此台北不缺水",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "completed",
        },
        {
          "id": 7,
          "title": "花園竣工",
          "content": "民眾有個遊憩好地方",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "completed",
        },
        {
          "id": 8,
          "title": "2023金質獎",
          "content": "第二次獲得金質獎",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "honor",
        },
        {
          "id": 9,
          "title": "日本櫻花行",
          "content": "今年櫻花特別多",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "activity",
        },
        {
          "id": 10,
          "title": "歐洲建築參訪",
          "content": "大理石的建築相當宏偉",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "activity",
        },
      ],
    };
  },
  computed: {
    totalNews() {
      return this.searching.length;
    },
    displayedNews() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.searching.slice(start, end);
    },
    searching() {
      if (this.filter == "all") return this.news;
      return this.news.filter(info => {
        return info.class == this.filter;
      })
    },
  },
}
</script>
