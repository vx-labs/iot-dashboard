<template>
  <v-card color="green" dark width="250" height="100">
    <v-row class="ma-2" align="center" justify="space-around">
      <v-sparkline
        :value="serie"
        color="rgba(255, 255, 255, .7)"
        line-width="2"
        padding="24"
        stroke-linecap="round"
        smooth
      ></v-sparkline>
      <span>
        <strong>{{ avg }}</strong> {{ title }}</span
      >
    </v-row>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['serie', 'title'],
  computed: {
    avg() {
      const rate = (this.serie as number[]);
      return (rate.reduce((a, b) => a + b, 0) / rate.length).toFixed(1);
    },
  },
  data: () => ({
  })
})
</script>