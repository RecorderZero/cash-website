<template>
    <v-main>
      <!-- button filter -->
      <v-container>
          <v-btn text="全部" :to="hrefprefix + '?class=全部'"></v-btn>
          <v-btn v-for="category in categories" :key="category.id" :text="category.chinese_text" :to="hrefprefix + '?class=' + category.chinese_text"></v-btn>
      </v-container>
      <!-- {{ displayItems }} -->
      <!-- 顯示 -->
      <!-- 未來page應改成query的方法，以便返回時能到原頁面 -->
      <!-- 抓資料應改成在後台query而非全部抓到前台 -->
      <v-container>
        <v-row>
          <v-col v-for="item in displayed" :key="item.id" cols="12" sm="6" md="4">
            <v-card link :to="hrefprefix + '/' + item.id">
              <v-img cover :src="item.imageUrl" height="200"></v-img>
              <v-card-text><v-icon icon="mdi-timer-edit-outline"></v-icon>{{ item.date }}</v-card-text>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text> {{ item.content }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-pagination v-model="page" :length="Math.ceil(totalItems / perPage)"></v-pagination>
      </v-container>
      <!-- {{ searching }} -->
    </v-main>
  </template>

<script>
export default {
    props: ['categories', 'displayItems', 'hrefprefix'],
  computed: {
    totalItems() {
      return this.searching.length;
    },
    displayed() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.searching.slice(start, end);
    },
    // 是否須將此邏輯丟給後台執行，前台執行太慢
    searching() {
      // console.log(this.$route.query.class)
      if (!this.displayItems) return [];
      if (this.$route.query.class == "全部") return this.displayItems;
      return this.displayItems.filter(item => {
        return item.classification == this.$route.query.class;
      })
    },
  },
  methods: {
    handleClick() {
      this.pageReset();
      // this.changeStyle(classification);
    },
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
      perPage: 6,
      selectedCategory: '全部',
    };
  },
}
</script>
