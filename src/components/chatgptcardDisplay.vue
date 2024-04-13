<template>
    <v-main>
      <!-- Filter buttons -->
      <v-container>
          <v-btn text="全部" :to="`${hrefprefix}?class=all`" @click="filterItems('all')"></v-btn>
          <v-btn v-for="category in categories" :key="category.id" :text="category.chinese_text" :to="`${hrefprefix}?class=${category.english_text}`" @click="filterItems(category.english_text)"></v-btn>
      </v-container>
  
      <!-- Display items -->
      <v-container>
        <v-row>
          <v-col v-for="item in displayedItems" :key="item.id" cols="12" sm="6" md="4">
            <v-card link :to="`${hrefprefix}/${item.id}`">
              <v-img cover :src="item.imageUrl" height="200"></v-img>
              <v-card-text><v-icon icon="mdi-timer-edit-outline"></v-icon>{{ item.date }}</v-card-text>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>{{ item.content }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-pagination v-model="page" :length="totalPages"></v-pagination>
      </v-container>
    </v-main>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    props: ['class', 'itemValue', 'hrefprefix'],
    data() {
      return {
        page: 1,
        perPage: 5,
        categories: [],
        items: [],
        filteredItems: [],
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.filteredItems.length / this.perPage);
      },
      displayedItems() {
        const start = (this.page - 1) * this.perPage;
        const end = start + this.perPage;
        return this.filteredItems.slice(start, end);
      }
    },
    methods: {
      filterItems(classification) {
        if (classification === 'all') {
          this.filteredItems = this.items;
        } else {
          this.filteredItems = this.items.filter(item => item.classification === classification);
        }
        this.page = 1; // Reset page when filtering
      },
      fetchData() {
        axios.get(`http://127.0.0.1:8000/${this.class}/`)
          .then(response => {
            this.categories = response.data;
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
  
        axios.get(`http://127.0.0.1:8000/${this.itemValue}/`)
          .then(response => {
            this.items = response.data;
            this.filteredItems = response.data;
          })
          .catch(error => {
            console.error('Error fetching items:', error);
          });
      }
    },
    created() {
      this.fetchData();
    }
  }
  </script>
  