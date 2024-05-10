<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-main class="pa-0">
    <v-container>
        <section class="my-4">
        <h5 class="text-h5"><strong>公司簡介</strong></h5>
        <v-divider></v-divider>
        
          <v-row class="pt-4">
            <v-col cols="3">
                <v-img src="../assets/cash.jpg"></v-img>
            </v-col>
            <v-col cols="9">
                <p align="start">
                        開巨技術顧問有限公司的公司文化凝聚著我們的核心價值觀和團隊精神。我們致力於打造一個充滿活力、開放和合作的工作環境，以激勵我們的團隊成員發揮他們最大的潛能，實現個人和團隊的共同目標。
                    </p><br>
                    <p align="start">
在開巨，我們堅信團隊合作是成功的關鍵。我們鼓勵團隊成員之間的互相支持和合作，促進知識共享和信息流通。我們相信每個人的貢獻都是重要的，只有通過團隊的努力和協作，我們才能取得最好的成果。
</p>
            </v-col>
          </v-row>  
            
        </section>

              <!-- 企業文化 -->
              <section class="my-4">
                  <h5 class="text-h5"><strong>公司理念</strong></h5>
                  <v-divider></v-divider>
                  <v-row class="pt-4">
            <v-col cols="3">
                <v-img src="../assets/cash.jpg"></v-img>
            </v-col>
            <v-col cols="9">
                <p align="start">
                        開巨技術顧問有限公司的公司文化凝聚著我們的核心價值觀和團隊精神。我們致力於打造一個充滿活力、開放和合作的工作環境，以激勵我們的團隊成員發揮他們最大的潛能，實現個人和團隊的共同目標。
                    </p><br>
                    <p align="start">
在開巨，我們堅信團隊合作是成功的關鍵。我們鼓勵團隊成員之間的互相支持和合作，促進知識共享和信息流通。我們相信每個人的貢獻都是重要的，只有通過團隊的努力和協作，我們才能取得最好的成果。
</p>
            </v-col>
          </v-row>  
              </section>
    </v-container>
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