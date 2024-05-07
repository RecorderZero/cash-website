<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from 'vue';

const socialMedias = reactive([
    {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/profile.php?id=100002793181780'
    },
    // {
    //     icon: 'mdi-twitter',
    //     link: ''
    // },
    // {
    //     icon: 'mdi-linkedin',
    //     link: ''
    // },
    // {
    //     icon: 'mdi-instagram',
    //     link: ''
    // },
])
</script>


<template>
    <v-footer rounded class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/%E9%A6%96%E9%A0%81">首頁</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">關於開巨</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">最新消息</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">工程實績</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">服務項目</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">永續發展</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91">聯絡我們</v-btn>


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