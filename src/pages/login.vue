<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-img class="mx-auto my-6" max-width="100"
      src="/src/assets/cash.jpg"></v-img>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-card-title align="center">後臺登入</v-card-title>
      <div class="text-subtitle-1 text-medium-emphasis">帳號</div>

        <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
            variant="outlined"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            密碼

            <a @click.prevent="forgotPasswordPage" class="text-caption text-decoration-none text-blue" href="#"
                rel="noopener noreferrer" target="_blank">
                忘記密碼？</a>
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
            density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
            @click:append-inner="visible = !visible"></v-text-field>

        <v-card class="mb-12" color="surface-variant" variant="tonal">
            <v-card-text class="text-medium-emphasis text-caption">
                警告資訊
            </v-card-text>
        </v-card>

        <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
            登入
        </v-btn>

        <v-card-text class="text-center">
            <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
                註冊 <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
        </v-card-text>
    </v-card>
  </div>
</template>
<script>
import router from '@/router';

export default {
  data: () => ({
      visible: false,
  }),
  methods: {
      forgotPasswordPage() {
          router.push({ name: 'ForgotPassword' })
      }
  }
}
</script>