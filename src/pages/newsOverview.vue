<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container v-if="news">
    <cardDisplay :displayItems="news" :hrefprefix="hrefprefix"/>
    </v-container>
    <v-container v-else>
        loading
    </v-container>
    <!-- <v-container>
        <v-row>
            <v-col cols="6">
                <div class="rounded-lg" style="position: relative;background-color: #687A86;width: 100%;height: 200px;">
                    <div class="rounded-lg d-flex align-center" style="position: absolute;width: 40%;height: 100%;">
                        <div style="position: absolute;background-color: #687A86; left: 10px;">
                            123<br>
                            123
                        </div>
                    </div>
                    <div class="rounded-lg d-flex justify-end align-center" style="position: absolute;width: 100%;height: 100%;">
                        <div style="position: absolute;background-color: #687A86;width: 60%;height: 90%;">
                            <v-img class="fill-height" src="../assets/carousel1.jpg"></v-img>
                        </div>
                    </div>
                </div>
                <span>wwww</span>
            </v-col>
            <v-col cols="6">
                <div class="rounded-lg" style="background-color: black;width: 100%;height: 200px;">

                </div>
            </v-col>
            <v-col cols="6">
                <div class="rounded-lg" style="background-color: black;width: 100%;height: 200px;">

                </div>
            </v-col>
            <v-col cols="6">
                <div class="rounded-lg" style="background-color: black;width: 100%;height: 200px;">

                </div>
            </v-col>
        </v-row>
    </v-container> -->
    <!-- {{ news }}
    {{ categories }} -->
    <!-- {{ this.$route.params.category }}
    {{ news }} -->
</template>

<script>
import http from '../http-common'

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
            http
            .get('new/?category=' + this.$route.params.category)
            .then(response => {this.news = response.data})
            .catch(error => {console.log(error.response)})
        }
    },
    watch: {
        '$route': 'fetchData'
    }
}
</script>