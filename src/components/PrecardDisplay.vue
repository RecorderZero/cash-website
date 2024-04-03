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
    searching() {
      if (this.filter == "all") return this.displayItems;
      return this.displayItems.filter(item => {
        return item.class == this.filter;
      })
    },
  },
  data() {
    return {
      filter: null,
      page: 1,
      perPage: 5,
    };
  },
}
</script>
