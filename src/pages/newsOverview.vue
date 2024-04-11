<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <cardDisplay :categories="categories" :displayItems="news" :hrefprefix="hrefprefix"/>
    <!-- {{ news }}
    {{ categories }} -->
</template>

<script>
import axios from 'axios'

export default {
  data() {
        return {
            news: null,
            categories: null,
            hrefprefix: 'news',
        }
    },
    created () {
        axios
            .get('http://127.0.0.1:8000/classification/')
            .then(response => (this.categories = response.data.results))
        axios
            .get('http://127.0.0.1:8000/new/')
            .then(response => (this.news = response.data.results))
    },
}
</script>