<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <cardDisplay :categories="categories" :displayItems="news" :hrefprefix="hrefprefix"/>
</template>

<script>
export default {
    data() {
    return {
        hrefprefix: 'news',
      categories: [
        {
          text: "全部",
          value: "all",
        },
        {
          text: "活動",
          value: "activity",
        },
        {
          text: "榮譽",
          value: "honor",
        },
        {
          text: "竣工",
          value: "completed",
        },
      ],
      news: [
        {
          "id": 1,
          "date": "2024/1/1",
          "title": "2024金質獎",
          "content": "團隊獲得金質獎",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "honor",
        },
        {
          "id": 2,
          "date": "2024/1/1",
          "title": "2024尾牙",
          "content": "尾牙大獎一台汽車",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "activity",
        },
        {
          "id": 3,
          "date": "2024/1/1",
          "title": "河濱公園竣工",
          "content": "河濱公園很漂亮",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "completed",
        },
        {
          "id": 4,
          "date": "2024/1/1",
          "title": "杜拜遊",
          "content": "杜拜好熱",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "activity",
        },
        {
          "id": 5,
          "date": "2024/1/1",
          "title": "榮升董事長",
          "content": "董事長好多會議要開",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "honor",
        },
        {
          "id": 6,
          "date": "2024/1/1",
          "title": "水壩竣工",
          "content": "從此台北不缺水",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "completed",
        },
        {
          "id": 7,
          "date": "2024/1/1",
          "title": "花園竣工",
          "content": "民眾有個遊憩好地方",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "completed",
        },
        {
          "id": 8,
          "date": "24-1-1",
          "title": "2023金質獎",
          "content": "第二次獲得金質獎",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "honor",
        },
        {
          "id": 9,
          "date": "24-1-1",
          "title": "日本櫻花行",
          "content": "今年櫻花特別多",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "activity",
        },
        {
          "id": 10,
          "date": "24-1-1",
          "title": "歐洲建築參訪",
          "content": "大理石的建築相當宏偉",
          "imageUrl": "/src/assets/cash.jpg",
          "class": "activity",
        },
      ],
    };
  },
}
</script>