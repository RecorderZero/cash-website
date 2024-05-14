<template>
    <v-main class="pa-0">
      <!-- button filter -->
      <!-- <v-container>
          <v-btn text="全部" :to="hrefprefix + '?class=全部'" @click="handleClick"></v-btn>
          <v-btn v-for="category in categories" :key="category.id" :text="category.chinese_text" :to="hrefprefix + '?class=' + category.chinese_text" @click="handleClick"></v-btn>
      </v-container> -->
      <!-- {{ displayItems }} -->
      <!-- 顯示 -->
      <!-- 未來page應改成query的方法，以便返回時能到原頁面 -->
      <!-- 抓資料應改成在後台query而非全部抓到前台 -->
      <v-container fluid>
        <v-row>
          <v-col v-for="item in displayed" :key="item.id" cols="12" sm="6" align="center">
            <v-card link :to="'/' + hrefprefix + '/details/' + item.id" style="max-width: 400px;background-color: #8496A2;">
              
              <v-row align="center" class="ma-0">
                <v-col cols="4" class="text-white">
                  <h3 class="pa-2">{{ item.subtitle }}</h3>
                  <p v-if="hrefprefix === '%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF'" style="position: absolute;bottom: 0px;">{{ item.date }}</p>
                  <p v-if="hrefprefix === '%E5%B7%A5%E7%A8%8B%E5%AF%A6%E7%B8%BE'" style="position: absolute;bottom: 0px;">{{ item.endDate }}</p>
                </v-col>
                <v-col cols="8" class="pa-1">
                  <v-img :src="item.imageUrl" style="min-height: 200px; max-height: 200px;"></v-img>
                </v-col>
              </v-row>
              <!-- <v-img :src="item.imageUrl" height="200"></v-img>
              <v-card-text v-if="hrefprefix === '%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF'"><v-icon icon="mdi-timer-edit-outline"></v-icon>{{ item.date }}</v-card-text>
              <v-card-text v-if="hrefprefix === '%E5%B7%A5%E7%A8%8B%E5%AF%A6%E7%B8%BE'"><v-icon icon="mdi-timer-edit-outline"></v-icon>{{ item.startDate + '~' + item.endDate  }}</v-card-text>
              <v-card-title>{{ item.title }}</v-card-title> -->
              <!-- <v-card-text> {{ item.content }}</v-card-text> -->
            </v-card>
            <h4 style="word-wrap: break-word; width: 80%;">{{ item.title }}</h4>
          </v-col>
        </v-row>
        <v-pagination v-model="page" :length="Math.ceil(totalItems / perPage)"></v-pagination>
      </v-container>
      <!-- {{ searching }} -->
    </v-main>
  </template>

<script>
export default {
    props: ['displayItems', 'hrefprefix'],
  computed: {
    totalItems() {
      return this.$props.displayItems.length;
    },
    displayed() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.$props.displayItems.slice(start, end);
    },
    // 是否須將此邏輯丟給後台執行，前台執行太慢
    // searching() {
    //   // console.log(this.$route.query.class)
    //   if (!this.displayItems) return [];
    //   if (this.$route.query.class == "全部") return this.displayItems;
    //   return this.displayItems.filter(item => {
    //     return item.classification == this.$route.query.class;
    //   })
    // },
  },
  methods: {
    // handleClick() {
    //   this.pageReset();
    //   // this.changeStyle(classification);
    // },
    pageReset() {
      return this.page = 1
    },
    // changeStyle(classification) {
    //   this.selectedCategory = classification
    // }
  },
  data() {
    return {
      page: 1,
      perPage: 4,
    };
  },
  watch: {
    '$route': 'pageReset'
  }
}
</script>
