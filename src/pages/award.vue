<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <v-main class="pa-0">
        <v-container v-if="data">
    <v-timeline>
        <v-timeline-item v-for="year in Object.keys(groupedData).reverse()" :key="year">
            <template v-slot:opposite>
                <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn
                    color="#8496A2"
                    v-bind="props"
                    >
                    {{year}}年﹝共{{groupedData[year].length}}件﹞
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, index) in groupedData[year]" :key="index" @click="navigator(item.link)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </template>
            <!-- <template v-slot:opposite>
            <h6 class="text-h6">{{ year }}年</h6>
            </template> -->
            <!-- <v-card class="text-white" style="background-color: #8496A2;">
                <v-card-title v-for="(item, index) in groupedData[year]" :key="index">
                    {{ item.title }}
                </v-card-title>
            </v-card> -->
            <!-- <v-list style="background-color: #687A86;" class="text-white">
                <v-list-item v-for="(item, index) in groupedData[year]" :key="index" @click="navigator(item.link)">
                {{ item.title }}
                </v-list-item>
            </v-list> -->
        </v-timeline-item>
    </v-timeline>
</v-container>
<v-container v-else>
    Loading
</v-container>
</v-main>
</template>

<script>
import http from '../http-common'
import router from '@/router'

export default {
    data() {
        return {
            data: null,
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            http.get('/historyaward/')
                .then(response => {
                    this.data = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        navigator(path) {
            router.push({'path': encodeURI(path)})
        }
    },
    computed: {
        groupedData() {
            const grouped = {}
            this.data.forEach(element => {
                // console.log(element)
                if (!grouped[element.year]) {
                    grouped[element.year] = []
                }
                grouped[element.year].push(element)
            });
            return grouped
        }
    }
}
</script>