<template>
  <span>{{ formatDate(timestamp) }}</span>
</template>
<script lang="ts">
import Vue from 'vue'
import moment from 'moment';

export default Vue.extend({
  props: [
    'timestamp',
  ],
  methods: {
    formatDate(timestamp: number): string {
      return moment(timestamp / 1000000).format('YYYY/MM/DD HH:mm:ss');
    }
  },
})
</script>