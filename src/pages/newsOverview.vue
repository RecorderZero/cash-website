<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container v-if="news">
    <cardDisplay :displayItems="news" :hrefprefix="hrefprefix"/>
    </v-container>
    <v-container v-else>
        loading
    </v-container>
    <!-- {{ news }}
    {{ categories }} -->
    <!-- {{ this.$route.params.category }}
    {{ news }} -->
</template>

<script>
import axios from 'axios'

export default {
  data() {
        return {
            news: null,
            categories: null,
            hrefprefix: '%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF',
        }
    },
    created () {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.categories = this.$route.params.category
            axios
            .get('http://127.0.0.1:8000/new/?category=' + this.$route.params.category)
            .then(response => {this.news = response.data})
            .catch(error => {console.log(error.response)})
        }
    },
    watch: {
        '$route': 'fetchData'
    }
}
</script>