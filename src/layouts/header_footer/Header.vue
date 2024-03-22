<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const route = useRoute();
const path = computed(() => route.path.replace('/', ''));
const pageTitle = ref('');
const { mobile } = useDisplay()

onMounted(() => {
    pageTitle.value = path.value;
});
const user = {
        initials: 'Ian',
        fullName: 'Ian Wang',
        email: 'ian03121997@gmail.com',
    };
const buttons = [
    {
        value: 'index',
        text: 'Home',
        icon: 'mdi-home',
        textClass: 'text-green',
        to: '/index',
    },
    {
        value: 'resume',
        text: 'Resume',
        icon: 'mdi-file-account',
        textClass: 'text-brown-darken-1',
        to: '/resume',
    },
    {
        value: 'about',
        text: 'About Me',
        icon: 'mdi-information',
        textClass: 'text-blue',
        to: '/about',
    },
    {
        value: 'contact',
        text: 'Contact Me',
        icon: 'mdi-phone-incoming',
        textClass: 'text-yellow-darken-4',
        to: '/contact',
    },
];

</script>


<template>
    <v-app-bar app :elevation="5">
        <!-- <v-app-bar-nav-icon v-if="!mobile">
            <v-icon icon="mdi-human-greeting" color="green-darken-4" />
        </v-app-bar-nav-icon>
        <v-app-bar-title class="text-deep-purple-lighten-2" v-if="!mobile">
            Welcome!
        </v-app-bar-title> -->
        <v-app-bar-nav-icon>
            <button>
                <img src="/src/assets/cash.jpg" width="100%" height="100%">
            </button>
        </v-app-bar-nav-icon>
        <v-app-bar-title v-if="!mobile">
            開巨技術顧問股份有限公司
        </v-app-bar-title>
        <v-spacer v-if="mobile"></v-spacer>

        <v-btn-toggle v-model="pageTitle">
            <v-btn v-for="button in buttons" :key="button.value" rounded="xl" size="large" :class="button.textClass"
                :value="button.value" :to="button.to">
                <v-icon :icon="button.icon" />
                <span v-if="!mobile">{{ button.text }}</span>
            </v-btn>
        </v-btn-toggle>

        <v-spacer></v-spacer>
        <v-menu min-width="200px" rounded>
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
        </v-menu>
    </v-app-bar>
</template>