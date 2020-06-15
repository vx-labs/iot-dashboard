<template>
  <v-card color="green" dark width="350" height="150">
    <v-card-title class="headline">{{ avg }}</v-card-title>
    <v-card-subtitle>
      <strong>{{ title }}</strong>
    </v-card-subtitle>
    <v-card-text>
      <div class="display-1">
        <v-sparkline
          :value="serie"
          color="rgba(255, 255, 255, .7)"
          line-width="2"
          padding="24"
          stroke-linecap="round"
          smooth
        ></v-sparkline>
      </div>
    </v-card-text>
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