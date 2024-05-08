<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const route = useRoute();
const path = computed(() => route.path.replace('/', '').split('/')[0]);
// const pageTitle = ref('');
const { mobile } = useDisplay()

// watch(path, (newValue, oldValue) => {
//     pageTitle.value = newValue.split('/')[0]
// })

// onMounted(() => {
//     pageTitle.value = path.value.split('/')[0];
// });
const buttons = [
            {
                code: '%E9%A6%96%E9%A0%81',
                // value: 'index',
                english: 'HOME',
                text: '首頁',
                // icon: 'mdi-home',
                // textClass: 'text-green',
            },
            {
                // value: 'about',
                code: '%E9%97%9C%E6%96%BC%E9%96%8B%E5%B7%A8',
                english: 'ABOUT',
                text: '關於開巨',
                children: [
                    {
                        // value: 'profile',
                        code: '%E5%85%AC%E5%8F%B8%E7%B0%A1%E4%BB%8B',
                        text: '公司簡介',
                    },
                    {
                        // value: 'award',
                        code: '%E6%AD%B7%E5%B9%B4%E7%8D%B2%E7%8D%8E',
                        text: '歷年獲獎',
                    },
                    {
                        // value: 'member',
                        code: '%E4%BA%BA%E5%8A%9B%E7%B5%84%E6%88%90',
                        text: '人力組成',
                    },
                ],
                // icon: 'mdi-information',
                // textClass: 'text-blue',
            },
            {
                // value: 'news',
                code: '%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF',
                english: 'NEW',
                text: '最新消息',
                children: [
                    {
                        // value: 'honor',
                        code: '%E7%8D%B2%E7%8D%8E%E6%A6%AE%E8%80%80',
                        text: '獲獎榮耀',
                    },
                    {
                        // value: 'activity',
                        code: '%E5%85%AC%E5%8F%B8%E6%B4%BB%E5%8B%95',
                        text: '公司活動',
                    },
                    {
                        // value: 'education',
                        code: '%E6%95%99%E8%82%B2%E8%A8%93%E7%B7%B4',
                        text: '教育訓練',
                    },
                ],
                // icon: 'mdi-newspaper-variant',
                // textClass: 'text-brown-darken-1',
            },
            {
                // value: 'projects',
                code: '%E5%B7%A5%E7%A8%8B%E5%AF%A6%E7%B8%BE',
                english: 'PROJECT',
                text: '工程實績',
                children: [
                    {
                        // value: 'road',
                        code: '%E9%81%93%E8%B7%AF%E5%B7%A5%E7%A8%8B',
                        text: '道路工程',
                    },
                    {
                        // value: 'geotechnical ',
                        code: '%E5%A4%A7%E5%9C%B0%E5%B7%A5%E7%A8%8B',
                        text: '大地工程',
                    },
                    {
                        // value: 'water_conservancy',
                        code: '%E6%B0%B4%E5%88%A9%E5%B7%A5%E7%A8%8B',
                        text: '水利工程',
                    },
                    {
                        // value: 'water_conservation',
                        code: '%E6%B0%B4%E4%BF%9D%E5%B7%A5%E7%A8%8B',
                        text: '水保工程',
                    },
                    {
                        // value: 'view',
                        code: '%E6%99%AF%E8%A7%80%E5%B7%A5%E7%A8%8B',
                        text: '景觀工程',
                    },
                ],
                // icon: 'mdi-hammer',
                // textClass: 'text-red',
            },
            {
                // value: 'technology',
                code: '%E6%9C%8D%E5%8B%99%E9%A0%85%E7%9B%AE',
                english: 'TECHNOLOGY',
                text: '服務項目',
                children: [
                {
                        // value: 'road',
                        code: '%E9%81%93%E8%B7%AF%E5%B7%A5%E7%A8%8B',
                        text: '道路工程',
                    },
                    {
                        // value: 'geotechnical ',
                        code: '%E5%A4%A7%E5%9C%B0%E5%B7%A5%E7%A8%8B',
                        text: '大地工程',
                    },
                    {
                        // value: 'water_conservancy',
                        code: '%E6%B0%B4%E5%88%A9%E5%B7%A5%E7%A8%8B',
                        text: '水利工程',
                    },
                    {
                        // value: 'water_conservation',
                        code: '%E6%B0%B4%E4%BF%9D%E5%B7%A5%E7%A8%8B',
                        text: '水保工程',
                    },
                    {
                        // value: 'view',
                        code: '%E6%99%AF%E8%A7%80%E5%B7%A5%E7%A8%8B',
                        text: '景觀工程',
                    },
                ],
                // icon: 'mdi-cog',
                // textClass: 'text-grey',
            },
            {
                // value: 'esg',
                code: '%E6%B0%B8%E7%BA%8C%E7%99%BC%E5%B1%95',
                english: 'ESG',
                text: '永續發展',
                children: [
                    {
                        // value: 'sustainableManagement',
                        code: '%E6%B0%B8%E7%BA%8C%E7%AE%A1%E7%90%86',
                        text: '永續管理',
                    },
                    {
                        // value: 'accountableGovernance',
                        code: '%E7%95%B6%E8%B2%AC%E6%B2%BB%E7%90%86',
                        text: '當責治理',
                    },
                    {
                        // value: 'mostReliableService',
                        code: '%E4%BF%A1%E8%B3%B4%E6%9C%8D%E5%8B%99',
                        text: '信賴服務',
                    },
                    {
                        // value: 'sustainableEngineering',
                        text: '永續工程',
                    },
                    {
                        // value: 'talentDevelopment',
                        code: '%E6%B0%B8%E7%BA%8C%E5%B7%A5%E7%A8%8B',
                        text: '人才發展',
                    },
                    {
                        // value: 'corporateCitizenship',
                        code: '%E4%BC%81%E6%A5%AD%E5%85%AC%E6%B0%91',
                        text: '企業公民',
                    },
                ],
            },
            {
                // value: 'contact',
                code: '%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91',
                english: 'CONTACT US',
                text: '聯絡我們',
                // icon: 'mdi-phone-incoming',
                // textClass: 'text-yellow-darken-4',
            },
        ];

</script>


<template>
    <v-app-bar :elevation="5">
        <!-- <v-app-bar-nav-icon v-if="!mobile">
            <v-icon icon="mdi-human-greeting" color="green-darken-4" />
        </v-app-bar-nav-icon>
        <v-app-bar-title class="text-deep-purple-lighten-2" v-if="!mobile">
            Welcome!
        </v-app-bar-title> -->
        <v-app-bar-nav-icon>
            <img src="/src/assets/cash.jpg" width="100%" height="100%">
        </v-app-bar-nav-icon>
        <v-app-bar-title>
            開巨技術顧問有限公司
        </v-app-bar-title>
        <!-- {{ path }} -->
        <!-- {{ pageTitle }} -->
        <!-- 電腦導航欄 -->
        <v-spacer v-if="mobile"></v-spacer>
        <v-btn-toggle divided mandatory>
            <v-btn :to="'/' + buttons[0].code" :class="{ 'text-yellow-darken-2': path === buttons[0].code }" style="text-align: left;">
                <strong>
                    <span style="font-size: 15px;">
                        {{ buttons[0].text }}<br>
                        <span style="font-size: 10px;">{{ buttons[0].english }}</span>
                    </span>
                </strong>
            </v-btn>
            <v-menu
        open-on-hover
        open-delay="0"
        >
        <template v-slot:activator="{ props }">
            <v-btn
            v-bind="props"
            :class="{ 'text-yellow-darken-2': path === buttons[1].code }"
            style="text-align: left;"
            >
            <strong>
                    <span style="font-size: 15px;">
                        {{ buttons[1].text }}<br>
                        <span style="font-size: 10px;">{{ buttons[1].english }}</span>
                    </span>
                </strong>
            </v-btn>
        </template>

        <v-list>
            <v-list-item v-for="(item, index) in buttons[1].children" :key="index" :to="'/' + buttons[1].code + '/' + item.code">
                <v-list-item-title>{{ item.text }}</v-list-item-title>

            </v-list-item>
        </v-list>
        </v-menu>
        <v-menu
        open-on-hover
        open-delay="0"
        >
        <template v-slot:activator="{ props }">
            <v-btn
            v-bind="props"
            :class="{ 'text-yellow-darken-2': path === buttons[2].code }"
            style="text-align: left;"
            >
            <strong>
                    <span style="font-size: 15px;">
                        {{ buttons[2].text }}<br>
                        <span style="font-size: 10px;">{{ buttons[2].english }}</span>
                        
                    </span>
                </strong>
            </v-btn>
        </template>

        <v-list>
            <v-list-item v-for="(item, index) in buttons[2].children" :key="index" :to="'/' + buttons[2].code + '/category/' + item.code">
                <v-list-item-title>{{ item.text }}</v-list-item-title>

            </v-list-item>
        </v-list>
        </v-menu>
        <v-menu
        open-on-hover
        open-delay="0"
        >
        <template v-slot:activator="{ props }">
            <v-btn
            v-bind="props"
            :class="{ 'text-yellow-darken-2': path === buttons[3].code }"
            style="text-align: left;"
            >
            <strong>
                    <span style="font-size: 15px;">
                        {{ buttons[3].text }}<br>
                        <span style="font-size: 10px;">{{ buttons[3].english }}</span>
                        
                    </span>
                </strong>
            </v-btn>
        </template>

        <v-list>
            <v-list-item v-for="(item, index) in buttons[3].children" :key="index" :to="'/' + buttons[3].code + '/category/' + item.code">
                <v-list-item-title>{{ item.text }}</v-list-item-title>

            </v-list-item>
        </v-list>
        </v-menu>
        <v-menu
        open-on-hover
        open-delay="0"
        >
        <template v-slot:activator="{ props }">
            <v-btn
            v-bind="props"
            :class="{ 'text-yellow-darken-2': path === buttons[4].code }"
            style="text-align: left;"
            >
            <strong>
                    <span style="font-size: 15px;">
                        {{ buttons[4].text }}<br>
                        <span style="font-size: 10px;">{{ buttons[4].english }}</span>
                        
                    </span>
                </strong>
            </v-btn>
        </template>

        <v-list>
            <v-list-item v-for="(item, index) in buttons[4].children" :key="index" :to="'/' + buttons[4].code + '/' + item.code">
                <v-list-item-title>{{ item.text }}</v-list-item-title>

            </v-list-item>
        </v-list>
        </v-menu>
        <v-menu
        open-on-hover
        open-delay="0"
        >
        <template v-slot:activator="{ props }">
            <v-btn
            v-bind="props"
            :class="{ 'text-yellow-darken-2': path === buttons[5].code }"
            style="text-align: left;"
            >
            <strong>
                    <span style="font-size: 15px;">
                        {{ buttons[5].text }}<br>
                        <span style="font-size: 10px;">{{ buttons[5].english }}</span>
                        
                    </span>
                </strong>
            </v-btn>
        </template>

        <v-list>
            <v-list-item v-for="(item, index) in buttons[5].children" :key="index" :to="'/' + buttons[5].code + '/' + item.code">
                <v-list-item-title>{{ item.text }}</v-list-item-title>

            </v-list-item>
        </v-list>
        </v-menu>
        <v-btn :to="'/' + buttons[6].code"  :class="{ 'text-yellow-darken-2': path === buttons[6].code }" style="text-align: left;">
                <strong>
                    <span style="font-size: 15px;">
                        {{ buttons[6].text }}<br>
                        <span style="font-size: 10px;">{{ buttons[6].english }}</span>
                        
                    </span>
                </strong>
            </v-btn>
        </v-btn-toggle>
        <!-- <v-btn-toggle v-model="pageTitle">
            <v-btn v-for="(button, index) in buttons" :key="index" rounded="xl" size="large"
                :to="'/' + button.value">
                <v-icon :icon="button.icon" />
                <span>{{ button.text }}</span>
            </v-btn>
        </v-btn-toggle> -->

        <!-- 手機導航欄 -->
        <!-- <v-spacer v-if="!mobile"></v-spacer>
        <v-menu open-on-hover open-delay="100" close-delay="100" v-if="mobile">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="text-black" icon="mdi-view-list">
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(button, index) in buttons" :key="index" :class="button.textClass" :prepend-icon="button.icon" :to="'/' + button.value">
                    <v-list-item-title>{{ button.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu> -->
        <!-- <v-menu min-width="200px" rounded open-on-hover>
            <template v-slot:activator="{ props }">
            <v-btn v-bind="props"  icon="mdi-login">
            </v-btn>
            </template>
            <v-list>
                <v-list-item to="/login">
                    <v-list-item-title>登入後臺</v-list-item-title>
                </v-list-item>
                <v-list-item to="/register">
                    <v-list-item-title>註冊帳號</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu> -->
        <!-- 頭像 -->
        <!-- <v-menu min-width="200px" rounded>
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-avatar color="brown" size="large">
                        <span class="text-h5">{{ user.initials }}</span>
                    </v-avatar>
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <div class="mx-auto text-center">
                        <v-avatar color="brown">
                            <span class="text-h5">{{ user.initials }}</span>
                        </v-avatar>
                        <h3>{{ user.fullName }}</h3>
                        <p class="text-caption mt-1">
                            {{ user.email }}
                        </p>
                        <v-divider class="my-3"></v-divider>
                        <v-btn rounded variant="text">
                            Edit Account
                        </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-btn rounded variant="text">
                            Disconnect
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-menu> -->
    </v-app-bar>
</template>