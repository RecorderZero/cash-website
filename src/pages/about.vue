<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-main>
     <!-- 公司簡介部分 -->
     <section>
          <v-container class="text-center">
              <h1 class="mb-4 text-h1">開巨技術顧問有限公司</h1>
              <v-divider></v-divider>

              <!-- 公司介紹 -->
              <section class="my-4">
                  <h4 class="text-h4">公司介紹</h4>
                  <p>
                    本公司(開巨技術顧問有限公司)從事有關土木、水利、水保及景觀工程之規劃.設計.監造及計畫管理等業務。
                  </p>
              </section>

              <!-- 企業文化 -->
              <section class="my-4">
                  <h4 class="text-h4">企業文化</h4>
                  <v-list>
                      <v-list-item>
                          <v-list-item-content>
                              <v-list-item-title class="text-body-1">text</v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                          <v-list-item-content>
                              <v-list-item-title class="text-body-1">text</v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                          <v-list-item-content>
                              <v-list-item-title class="text-body-1">text</v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>
                  </v-list>
              </section>

              <!-- 公司願景 -->
              <section class="my-4">
                  <h4 class="text-h4">公司願景</h4>
                  <p>
                    text
                  </p>
              </section>

              <!-- 專業技術團隊 -->
              <section class="my-4">
                  <h4 class="text-h4">專業技術團隊</h4>
                  <v-list>
                      <v-list-item>
                          <v-list-item-content>
                              <v-list-item-title class="text-body-1">專業團隊</v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                          <v-list-item-content>
                              <v-list-item-title class="text-body-1">品質保證</v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                          <v-list-item-content>
                              <v-list-item-title class="text-body-1">定制服務</v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                          <v-list-item-content>
                              <v-list-item-title class="text-body-1">社區參與</v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>
                  </v-list>
              </section>
          </v-container>
      </section>

      <!-- 服務部分 -->
      <section>
          <v-container>
              <h2>我們的服務</h2>
              <v-row>
                  <v-col cols="12" md="4">
                      <v-card>
                          <v-img alt="寵物美容服務"></v-img>
                          <v-card-title>寵物美容</v-card-title>
                          <v-card-text>
                              我們提供專業的寵物美容服務，讓您的寵物看起來煥然一新。
                          </v-card-text>
                      </v-card>
                  </v-col>
                  <v-col cols="12" md="4">
                      <v-card>
                          <v-img alt="寵物寄養服務"></v-img>
                          <v-card-title>寵物寄養</v-card-title>
                          <v-card-text>
                              無論您需要短期或長期的寵物寄養，我們都為您提供安全舒適的環境。
                          </v-card-text>
                      </v-card>
                  </v-col>
                  <v-col cols="12" md="4">
                      <v-card>
                          <v-img alt="寵物訓練服務"></v-img>
                          <v-card-title>寵物訓練</v-card-title>
                          <v-card-text>
                              我們的專業訓練師將幫助您的寵物培養好行為和技能。
                          </v-card-text>
                      </v-card>
                  </v-col>
              </v-row>
          </v-container>
      </section>
      <!-- 聯系信息部分 -->
      <section>
          <v-container>
              <h2>聯絡我們</h2>
              <v-row>
                  <v-col cols="12" md="6">
                      <v-card>
                          <v-card-title>營業時間</v-card-title>
                          <v-card-text>
                              周一至周五: 9:00 AM - 6:00 PM
                          </v-card-text>
                      </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                      <v-card>
                          <v-card-title>聯絡方法</v-card-title>
                          <v-card-text>
                              地址：123 寵物大道，城市，郵編<br>
                              電話：(123) 456-7890<br>
                              電子郵件：info@xiaomingpets.com
                          </v-card-text>
                      </v-card>
                  </v-col>
              </v-row>
          </v-container>
      </section>
  </v-main>
</template>

<script setup>
//
</script>