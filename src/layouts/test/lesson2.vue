<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="app">
            <div>
                <!-- 從下面可以看出,我將click事件放到一個h1標簽上 -->
                <!-- 所以并不是只有button, input之類的可以監聽事件 -->
                <!-- @click事件中，那一行的意思是: 當你按click之後,本來的click就是false(在Vue的data()裏面)右邊的"!click"會在每次點擊的時候將click的值反轉 -->
                <!-- div的部分則依據click的值來選擇是否顯示 -->
                <div v-show="click">你剛剛點了下面的h1</div>
                <!-- 這邊使用的是運算符，而下方第二行用的是計算屬性(computed()方法) -->
                <!-- <h1 @click="click = !click">{{ click ? "隱藏" : "展開" }}</h1> -->
                <h1 @click="click = !click">{{ isClicked }}</h1>
                <br />
                <!-- 我們可以使用另外一種方法，那就是將v-on 事件的處理包裝成一個methods -->
                <div>
                    <div v-show="click">這個是使用method事件的div</div>
                    <button @click="clickEvent">{{ isClicked }}</button>
                </div>
            </div>
            <!-- 重點整理 -->
            <!-- 計算屬性:緩存結果 如果多次使用,data屬性沒有變化,會直接從緩存拿出來用,性能方面好一些(換句話説，只有在data()裏面的值變化時才計算) -->
            <!-- 方法:不會緩存結果  每一次執行都會重新計算,并且計算屬性只有newValue和oldValue,但是方法可以傳遞參數 -->
            <!-- 可以在computed 裏面使用this.methodName()來使用定義好的方法 -->
            <!-- 計算屬性因該是被當作data一樣來做使用 -->
            <!-- 方法通常作爲事件監聽, 和一些很常用到的邏輯將它們抽離出來,當作一般的js函數使用 -->
        </div>
</template>

<script>
export default{
data() {
        return {
            click : false,
            countDown : 5,
            timer : null
        };
    },
    computed: {
        // 計算屬性，能夠使用計算的方式動態回傳一個值或數組
        isClicked() {
            return this.click ? "隱藏 " + this.countDown : "展開";
        }
    },
    methods: {
        clickEvent() {
            this.click = !this.click;
        }
    },
    watch: {
        // watch方法是監視你的data裏面的值，所以你的data裏面的key叫什麽名字，watch就必須一模一樣
        // 下面這行的意思就是,目前我們的click預設是false，但是當我們按下按鈕，它會變成true
        // 所以newValue就是true, oldValue就是false
        click(newValue, oldValue) {
            if (newValue) {
                this.countDown = 5;
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
                this.timer = setInterval(() => {
                    this.countDown -= 1;
                    if (this.countDown === 0) {
                        this.click = false;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000);
            }
        }

        // 另外，當我們在watch一個data物件的時候，如果我們觀察的是整個物件的變化，就可以用上面的寫法
        // 但是，如果我們要監聽的是一個物件裏面的任何一個value的變化，那我們就要加上`deep: true`屬性
        // data() {
        //     return {
        //         userData: {
        //             name: 'John',
        //             age: 30,
        //         },
        //     };
        // }
        // 像這樣如果我們有修改userData裏面的屬性的話，我們就要使用另外一種寫法：
        // watch: {
        //     userData: {
        //         handler(newVal, oldVal) {
        //         console.log('userData changed');
        //         },
        //         deep: true,
        //     },
        // },
        // watch下面一樣放data()裏面的名稱，然後裏面塞入一個handler方法，并且在handler方法外面、userData裏面加入deep: true 屬性
    },
};
</script>