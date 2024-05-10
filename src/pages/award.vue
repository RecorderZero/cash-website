<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <v-main class="pa-0">
        <!-- {{data}} -->
        <!-- {{ groupedData }} -->
        <v-container v-if="data">
            {{ console.log(groupedData) }}
    <v-timeline>
        <v-timeline-item v-for="year in Object.keys(groupedData).reverse()" :key="year">
            <template v-slot:opposite>
            <h6 class="text-h6">{{ year }}年</h6>
            </template>
            <v-card class="text-white" style="background-color: #687A86;">
                <v-card-title v-for="(item, index) in groupedData[year]" :key="index">
                    {{ item.title }}
                </v-card-title>
            </v-card>
            <!-- <v-list style="background-color: #687A86;">
                <v-list-item v-for="(item, index) in groupedData[year]" :key="index">
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
            http.get('/award/')
                .then(response => {
                    this.data = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    computed: {
        groupedData() {
            const grouped = {}
            this.data.forEach(element => {
                console.log(element)
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