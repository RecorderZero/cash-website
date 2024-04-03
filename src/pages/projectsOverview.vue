<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <cardDisplay :categories="categories" :displayItems="news" :hrefprefix="hrefprefix"/>
</template>

<script>
export default {
  data() {
  return {
      hrefprefix: 'projects',
    categories: [
      {
        text: "全部",
        value: "all",
      },
      {
        text: "道路工程",
        value: "road",
      },
      {
        text: "大地工程",
        value: "land",
      },
      {
        text: "景觀工程",
        value: "view",
      },
      {
        text: "水利工程",
        value: "water",
      },
    ],
    news: [
      {
        "id": 1,
          "date": "2023/1/1-2024/1/1",
        "title": "頭前溪",
        "content": "團隊獲得金質獎",
        "imageUrl": "/src/assets/cash.jpg",
        "class": "water",
      },
      {
        "id": 2,
          "date": "2023/1/1-2024/1/1",
        "title": "信義路",
        "content": "尾牙大獎一台汽車",
        "imageUrl": "/src/assets/cash.jpg",
        "class": "road",
      },
      {
        "id": 3,
          "date": "2023/1/1-2024/1/1",
        "title": "河濱公園竣工",
        "content": "河濱公園很漂亮",
        "imageUrl": "/src/assets/cash.jpg",
        "class": "view",
      },
      {
        "id": 4,
          "date": "2023/1/1-2024/1/1",
        "title": "國家墓園",
        "content": "杜拜好熱",
        "imageUrl": "/src/assets/cash.jpg",
        "class": "land",
      },
      {
        "id": 5,
          "date": "2023/1/1-2024/1/1",
        "title": "忠孝東路",
        "content": "董事長好多會議要開",
        "imageUrl": "/src/assets/cash.jpg",
        "class": "road",
      },
      {
        "id": 6,
          "date": "2023/1/1-2024/1/1",
        "title": "水壩竣工",
        "content": "從此台北不缺水",
        "imageUrl": "/src/assets/cash.jpg",
        "class": "water",
      },
      {
        "id": 7,
          "date": "2023/1/1-2024/1/1",
        "title": "花園竣工",
        "content": "民眾有個遊憩好地方",
        "imageUrl": "/src/assets/cash.jpg",
        "class": "view",
      },
      {
        "id": 8,
          "date": "2023/1/1-2024/1/1",
        "title": "航空城",
        "content": "第二次獲得金質獎",
        "imageUrl": "/src/assets/cash.jpg",
        "class": "land",
      },
      {
        "id": 9,
          "date": "2023/1/1-2024/1/1",
        "title": "淡水河",
        "content": "今年櫻花特別多",
        "imageUrl": "/src/assets/cash.jpg",
        "class": "water",
      },
      {
        "id": 10,
          "date": "2023/1/1-2024/1/1",
        "title": "景美公園",
        "content": "大理石的建築相當宏偉",
        "imageUrl": "/src/assets/cash.jpg",
        "class": "view",
      },
    ],
  };
},
}
</script>