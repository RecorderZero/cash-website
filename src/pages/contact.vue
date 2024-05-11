<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-main>
  <v-container align="center" style="max-width: 600px;">
    <v-card hover href="https://www.104.com.tw/company/1a2x6bil0d">
    <v-img src="../assets/14585215026.png"></v-img>
    </v-card>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-list>
          <v-list-item
            v-for="(item, index) in company"
            :key="index"
            :prepend-icon="item.icon"
            :title="item.text"
            ></v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
  
  
  <v-container align="center" style="max-width: 1200px; width: 100%; overflow: hidden;">
    <iframe
        frameborder="0"
        height="450px"
        style="border:0; width: 100%;"
        src="https://www.google.com/maps/embed/v1/place?q=新北市中和區景平路262號12樓之1&key=AIzaSyDz_ZABTvTg7hONTRI4bKVNJW7XVTUKhjk"
        allowfullscreen
    ></iframe>    
</v-container>
</v-main>
</template>

<script>
export default {
  data() {
    return {
      company: [
        { icon: 'mdi-home', text: '總公司'},
        { icon: 'mdi-map-marker', text: '新北市中和區景平路262號12樓之1'},
        { icon: 'mdi-phone', text: '02-29439192#682'},
        { icon: 'mdi-account-tie-woman', text: '劉小姐'}
      ]
    }
  }
}
</script>