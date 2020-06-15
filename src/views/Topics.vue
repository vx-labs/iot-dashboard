<template>
  <span>Hi.</span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Devices',
  components: {},
  mounted() {
    this.$nextTick(async () => {
      //this.$store.dispatch('refreshTopics');
    });
  },
});
</script>
