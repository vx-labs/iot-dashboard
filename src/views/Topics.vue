<template>
  <TopicList title="Topics"></TopicList>
</template>

<script lang="ts">
import Vue from 'vue'
import TopicList from '@/components/TopicList.vue';

export default Vue.extend({
  name: 'Devices',
  components: {
    TopicList,
  },
  mounted() {
    this.$nextTick(async () => {
      this.$store.dispatch('refreshTopics');
    });
  },
});
</script>
