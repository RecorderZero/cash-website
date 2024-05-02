<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-main>
     <!-- 公司簡介部分 -->
     <section>
          <v-container class="text-center">
              <h2 class="mb-4 text-h2">開巨技術顧問有限公司</h2>
              <v-divider></v-divider>

              <!-- 公司介紹 -->
              <section class="my-4">
                  <h4 class="text-h4">公司介紹</h4>
                  <p align="start">
                    開巨技術顧問有限公司是一家專業從事土木、水利、水保以及景觀工程領域的企業。我們擁有一支高素質的團隊，包括經驗豐富的工程師、設計師和專業的監理人員。我們的服務涵蓋了各種規模的項目，從小型社區開發到大型基礎設施項目，無論是公共還是私人部門，我們都有豐富的經驗和能力來滿足客戶的需求。
                </p><br>
                <p align="start">
作為一家致力於卓越的技術顧問公司，我們注重創新和協作。我們的團隊不斷努力尋找最佳的解決方案，並與客戶密切合作，確保項目按時完成並符合最高標準。
                </p><br>
                <p align="start">
我們的服務範圍涵蓋了土木工程、水利工程、水保工程和景觀設計等多個領域。我們可以為客戶提供全方位的專業服務，包括項目規劃、設計、監督和管理等各個階段。我們致力於通過創新的設計和高效的管理，為客戶創造價值，實現項目的成功。
                </p><br>
                <p align="start">
無論您的項目規模如何，我們都樂意為您提供卓越的服務和專業的支持。如果您正在尋找一家可靠的技術顧問公司來幫助您實現您的目標，請與我們聯繫。我们期待與您合作，共同攜手打造更美好的未來。
                </p>
              </section>

              <!-- 企業文化 -->
              <section class="my-4">
                  <h4 class="text-h4">企業文化</h4>
                      <p align="start">
                        開巨技術顧問有限公司的公司文化凝聚著我們的核心價值觀和團隊精神。我們致力於打造一個充滿活力、開放和合作的工作環境，以激勵我們的團隊成員發揮他們最大的潛能，實現個人和團隊的共同目標。
                    </p><br>
                    <p align="start">
在開巨，我們堅信團隊合作是成功的關鍵。我們鼓勵團隊成員之間的互相支持和合作，促進知識共享和信息流通。我們相信每個人的貢獻都是重要的，只有通過團隊的努力和協作，我們才能取得最好的成果。
</p><br>
<p align="start">
我們對品質和專業精神要求嚴格。我們的團隊成員都是行業中的專家，他們以卓越的專業知識和豐富的經驗為客戶提供最佳的解決方案。我們始終堅持追求卓越，確保我們的工作達到最高的標準。
</p><br>
<p align="start">
開巨技術顧問有限公司注重創新和持續學習。我們鼓勵團隊成員不斷探索新的想法和方法，並提供豐富的培訓和發展機會，以幫助他們不斷提升自己的專業技能和知識。
</p><br>
<p align="start">
我們重視客戶的需求和滿意度。我們與客戶建立緊密的合作關係，傾聽他們的需求，理解他們的挑戰，並提供量身定制的解決方案，以實現客戶的期望並超越他們的期望。
</p><br>
<p align="start">
在開巨，我們致力於創建一個積極向上、充滿活力和樂於奉獻的工作文化。我們鼓勵團隊成員勇於挑戰自我、追求卓越，並通過共同努力實現個人和團隊的成長和成功。
                      </p>
              </section>

              <!-- 公司願景 -->
              <section class="my-4">
                  <h4 class="text-h4">公司願景</h4>
                  <p align="start">
                  開巨技術顧問有限公司的願景是成為行業的領導者，通過提供卓越的服務和創新的解決方案，影響和改善人們的生活和環境。我們致力於建立一個可持續發展的未來，致力於保護和改善我們的地球資源，並為後代留下更美好的世界。
                </p><br>
                  <p align="start">
我們的願景是成為客戶信賴的首選合作夥伴，他們可以依靠我們的專業知識和豐富經驗，解決他們面臨的挑戰，實現他們的目標和夢想。我們希望通過不懈的努力和持續的創新，為客戶創造價值，實現共同的成功和成長。
</p><br>
<p align="start">
我們的願景是成為一個充滿活力和多元化的企業，吸引和培養最優秀的人才，提供他們一個發展和實現自我的平台。我們希望每一位團隊成員都能在開巨找到屬於自己的舞台，充分發揮他們的潛能，實現個人和職業生涯的成功和成長。
</p><br>
<p align="start">
我們的願景是與社會各界共同努力，推動可持續發展和社會進步。我們希望通過我們的業務活動和社會責任項目，積極參與社會公益事業，促進環境保護、教育和社會福利等領域的發展，為社會做出積極的貢獻。
</p>
</section>

              <!-- 專業技術團隊 -->
              <section class="my-4">
                  <h4 class="text-h4">專業技術團隊</h4>
                  <v-container>
                    <v-row>
                        <v-col md="4" sm="6" v-for="(item, index) in professionTeam" :key="index">
                            <v-icon size="x-large">{{ item.icon }}</v-icon>
                            <p>{{ item.text }}</p>
                        </v-col>
                    </v-row>
                  </v-container>
                  <!-- <v-list>
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
                  </v-list> -->
              </section>
          </v-container>
      </section>

      <!-- 服務部分 -->
      <section>
          <v-container>
              <h2>我們的服務</h2>
              <!-- <v-row>
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
              </v-row> -->
          </v-container>
      </section>
      <!-- 聯系信息部分 -->
      <section>
          <v-container>
              <h2>聯絡我們</h2>
              <!-- <v-row>
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
              </v-row> -->
          </v-container>
      </section>
  </v-main>
</template>

<script>
export default {
    data() {
        return {
            professionTeam: [
                { icon: 'mdi-account-group', text: '專業團隊' },
                { icon: 'mdi-checkbox-multiple-marked-outline', text: '品質保證'},
                { icon: 'mdi-clipboard-list', text: '訂製服務'},
                { icon: 'mdi-hand-heart', text: '社區參與'},
            ],
        }
    }
}
</script>