<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="file">
        <label class="file-label">
            <input id="files" type="file" ref="file" class="file-input" @change="selectFile">
        </label>
    </div>
    <v-btn v-if="image" class="button is-primary mt-2" @click="upload">上傳</v-btn>
    <div v-if="message" class="notification mt-6">{{ message }}</div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            image: null,
        }
    },
    methods: {
        selectFile() {
            this.image = this.$refs.file.files.item(0)
        },
        upload() {
            this.performUpload(this.document)
            .then(() => {
                this.message = 'The file was uploaded'
                this.image = null
            })
            .catch(error => {
                this.message = error
                this.image = null
            })
        },
        // performUpload(file) {
        //     let form
        // }
    }
}
</script>