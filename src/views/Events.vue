<template>
  <EventList title="Events"></EventList>
</template>

<script lang="ts">
import Vue from 'vue'

import EventList from '@/components/EventList.vue';
export default Vue.extend({
  name: 'Events',
  components: { EventList },
});
</script>
