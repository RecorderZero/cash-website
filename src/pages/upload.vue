<!-- eslint-disable vue/multi-word-component-names -->
<template>
<v-container class="fill height" fluid>
    <v-card class="mx-auto" elevation="8" min-width="400" rounded="lg">
    <v-form v-model="form" class="mx-auto bg-white rounded-lg pa-5" min-width="400" title="News Upload">
        <v-text-field
            v-model="title"
            :rules="nonEmptyRules"
            label="標題"
        ></v-text-field>
        <v-text-field
            v-model="content"
            :rules="nonEmptyRules"
            label="內文"
        ></v-text-field>
        <v-card-actions>
        <v-btn block class="bg-success" type="submit" :disabled="!form" @click="submit">上傳貼文</v-btn>
    </v-card-actions>
    </v-form>
</v-card>
    標題{{ title }}
    內文{{ content }}
    <v-card v-if="errorMessage" title="錯誤訊息" :text="errorMessage" class="mx-auto" elevation="8" min-width="400" rounded="lg">
    </v-card>
</v-container>

</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            form: false,
            title: null,
            content: null,
            errorMessage: null,
            newId: null,
        };
    },
    computed: {
        nonEmptyRules() {
            return [
                (v) => !!v || "欄位不可為空",
            ];
        },
    },
    methods: {
        submit() {
            const post = {
                title: this.title,
                content: this.content,
            };
            axios
                .post("127.0.0.1:8000/new/", post)
                .then(response => this.newId = response)
                .catch(error => {
                    this.errorMessage = error;
                })

        }
    },
}
</script>