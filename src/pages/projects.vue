<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-main>
    <!-- use $route.params.id to get data from api -->
    <!-- <v-container>
        <v-carousel cycle=true interval="2000"> -->
          <!-- 輪播內容 -->
          <!-- <v-carousel-item cover v-for="(img, index) in item.imageUrl" :src="img" :key="index">
          </v-carousel-item>
        </v-carousel>
    </v-container> -->
      <!-- <h1> Welcome to News page </h1>
      <p>This is the news that opens on <strong>/news/{{ $route.params.id }}</strong> route</p> -->
      <v-container v-if="item">
        <v-row>
        <h1>{{ item.title }}</h1>
        </v-row>
        <br><br>
        <v-row>
        <p>{{ item.content }}</p>
        <v-divider class="border-opacity-50"></v-divider>
        </v-row>
        <br><br>
        <v-row>
            <v-icon icon="mdi-account"></v-icon><p>{{ '參與成員：' + employees }}</p>
        </v-row>
        <v-row>
            <v-icon icon="mdi-map-marker"></v-icon><p>{{ '地點：' + item.location }}</p>
        </v-row>
        <v-row>
            <v-icon icon="mdi-calendar-check"></v-icon><p>{{ '執行期間：' + item.date }}</p>
        </v-row>
        <br><br>
        <v-row>
        <v-btn @click="$router.go(-1)">回到上一頁</v-btn>
        </v-row>
    </v-container>
    <v-container v-else>
        <p>Loading</p>
    </v-container>
</v-main>
  </template>

<script>
import axios from 'axios'
export default {
    
    created() {
        axios
            .get('http://127.0.0.1:8000/project/' + this.$route.params.id + '/')
            .then(response => {
                this.item = response.data;
                // 獲取員工
                return Promise.all(this.item.member.map(memberId => {
                    return axios.get('http://127.0.0.1:8000/member/'+memberId+'/');
                }));
            })
            .then(employeeResopnses => {
                // 處理員工響應
                this.employees = employeeResopnses.map(response => response.data.name);
            })
            .catch(error => {
                console.log(error);
            })
    },
    data() {
        return {
            employees: null,
            item: null,
        }
    },
}
</script>

<!-- <script>
export default {
    computed: {
        searching() {
            return this.news.filter(item => {
                return item.id == this.$route.params.id;
            })
        },
    },
    data() {
        return {
            news: [
            {
                "id": 1,
                "date": "2023/1/1-2024/1/1",
                "title": "頭前溪",
                "content": "團隊獲得金質獎",
                "member": "員工1,員工2",
                "location": "新北市",
                "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
                "class": "water",
            },
            {
                "id": 2,
                "date": "2023/1/1-2024/1/1",
                "title": "信義路",
                "content": "尾牙大獎一台汽車",
                "member": "員工1,員工2",
                "location": "新北市",
                "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
                "class": "road",
            },
            {
                "id": 3,
                "date": "2023/1/1-2024/1/1",
                "title": "河濱公園竣工",
                "content": "河濱公園很漂亮",
                "member": "員工1,員工2",
                "location": "新北市",
                "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
                "class": "view",
            },
            {
                "id": 4,
                "date": "2023/1/1-2024/1/1",
                "title": "國家墓園",
                "content": "杜拜好熱",
                "member": "員工1,員工2",
                "location": "新北市",
                "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
                "class": "land",
            },
            {
                "id": 5,
                "date": "2023/1/1-2024/1/1",
                "title": "忠孝東路",
                "content": "董事長好多會議要開",
                "member": "員工1,員工2",
                "location": "新北市",
                "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
                "class": "road",
            },
            {
                "id": 6,
                "date": "2023/1/1-2024/1/1",
                "title": "水壩竣工",
                "content": "從此台北不缺水",
                "member": "員工1,員工2",
                "location": "新北市",
                "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
                "class": "water",
            },
            {
                "id": 7,
                "date": "2023/1/1-2024/1/1",
                "title": "花園竣工",
                "content": "民眾有個遊憩好地方",
                "member": "員工1,員工2",
                "location": "新北市",
                "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
                "class": "view",
            },
            {
                "id": 8,
                "date": "2023/1/1-2024/1/1",
                "title": "航空城",
                "content": "第二次獲得金質獎",
                "member": "員工1,員工2",
                "location": "新北市",
                "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
                "class": "land",
            },
            {
                "id": 9,
                "date": "2023/1/1-2024/1/1",
                "title": "淡水河",
                "content": "今年櫻花特別多",
                "member": "員工1,員工2",
                "location": "新北市",
                "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
                "class": "water",
            },
            {
                "id": 10,
                "date": "2023/1/1-2024/1/1",
                "title": "景美公園",
                "content": "大理石的建築相當宏偉",
                "member": "員工1,員工2",
                "location": "新北市",
                "imageUrl": ["/src/assets/carousel1.jpg", "/src/assets/carousel2.jpg", "/src/assets/carousel3.jpg"],
                "class": "view",
            },
            ],
        };
    },
}
</script> -->