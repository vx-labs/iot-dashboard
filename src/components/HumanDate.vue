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
    formatDate(timestamp: Date): string {
      return moment(timestamp).format('YYYY/MM/DD HH:mm:ss');
    }
  },
})
</script>