<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="1" align="center">
            <v-btn icon="mdi-arrow-left" :disabled="page <= 1" @click="previousPage()"></v-btn>
            </v-col>
            <!-- <v-col cols="1" align="center" class="pt-6">
            <a v-for="item in pages" :key="item" :value="item" :href="item">{{ item + ' ' }}</a>
            </v-col> -->
            <v-col md="1" sm="2">
            <v-select
                v-model="page"
                :items="pages"
                variant="solo"
                :value="page"
                style="justify-content: center;"
                ></v-select>
            </v-col>
            <v-col cols="1" align="center">
            <v-btn icon="mdi-arrow-right" :disabled="page >= pages.length" @click="nextPage()"></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    // props: ['totalItems'],
    data() {
        return {
            iterator: null,
            pages: null,
            page: 1,
            perPage: 5,
        }
    },
    methods: {
        nextPage() {
            this.page += 1
        },
        previousPage() {
            this.page -= 1
        },
    },
    created: {
        createPage() {
            for(this.iterator = 1;this.iterator < Math.ceil(10/this.perPage);this.iterator++) {
                this.pages.push(this.iterator)
            }
        },
    },
    // beforeUpdate: {

    // }
}

</script>