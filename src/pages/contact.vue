<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <test>
      <template v-slot:header>
        <h1>父頭部</h1>
      </template>
      <template v-slot:content>
      </template>
      <template v-slot:footer>
        <footer>父底部</footer>
      </template>
      <template v-slot="slotProps">
        <p>{{ slotProps.item }}</p>
      </template>
    </test>
  </div>
  <!-- <v-main>
    contact
  </v-main> -->
</template>

<script setup>
import test from './test.vue'
  //
</script>
