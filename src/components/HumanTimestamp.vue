<template>
  <span>{{ formatDate(timestamp) }}</span>
</template>
<script lang="ts">
import Vue from 'vue'
import moment from 'moment';
import { mapGetters } from 'vuex'

export default Vue.extend({
  props: [
    'timestamp',
  ],
  computed: {
    ...mapGetters([
      'now',
    ]),
  },

  methods: {
    formatDate(timestamp: Date): string {
      return moment(timestamp).from(moment(this.now));
    }
  },
})
</script>