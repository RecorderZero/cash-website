<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <slot name="header">子組件頭部</slot>
        
        <slot name="footer">子組件底部</slot>

        <!-- <slot  name="content">{{ item }}</slot> -->
        <slot :item="item"></slot>
    </div>

</template>

<script>
export default{
    data() {
        return {
            item: ['tt','aa','cc'],
        };
    },
};

</script>