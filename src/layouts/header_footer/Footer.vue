<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from 'vue';

const socialMedias = reactive([
    {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/profile.php?id=100002793181780'
    },
])

const pages = reactive([
    {
        to: '/%E9%A6%96%E9%A0%81',
        text: '首頁',
    },
    {
        to: '/%E9%97%9C%E6%96%BC%E9%96%8B%E5%B7%A8/%E5%85%AC%E5%8F%B8%E7%B0%A1%E4%BB%8B',
        text: '關於開巨',
    },
    {
        to: '/%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF/category/%E7%8D%B2%E7%8D%8E%E6%A6%AE%E8%80%80',
        text: '最新消息',
    },
    {
        to: '/%E5%B7%A5%E7%A8%8B%E5%AF%A6%E7%B8%BE',
        text: '工程實績',
    },
    {
        to: '/%E6%9C%8D%E5%8B%99%E9%A0%85%E7%9B%AE',
        text: '服務項目',
    },
    {
        to: '/%E6%B0%B8%E7%BA%8C%E7%99%BC%E5%B1%95/%E6%B0%B8%E7%BA%8C%E7%AE%A1%E7%90%86',
        text: '永續發展',
    },
    {
        to: '/%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91',
        text: '聯絡我們',
    },
])
</script>


<template>
    <v-footer rounded class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>
            <v-col class="text-center mt-4" cols="12" justify="center">
                <v-btn v-for="(page, index) in pages" :key="index" color="white" rounded="xl" class="mx-2" variant="text" :to="page.to">{{ page.text }}</v-btn>
            </v-col>
            <!-- <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/%E9%A6%96%E9%A0%81">首頁</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">關於開巨</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">最新消息</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">工程實績</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">服務項目</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">永續發展</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91">聯絡我們</v-btn> -->


            <v-col class="text-center mt-4" cols="12">
                <v-btn v-for="media in socialMedias" :key="media" class="mx-4" :icon="media.icon" :href="media.link"
                    variant="text"></v-btn>
            </v-col>


            <v-col class="text-center mt-4" cols="12">
                <strong>All contents of this site, unless otherwise noted, are ©2000-{{ new Date().getFullYear() }} Cash.
                    All Rights Reserved.</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>