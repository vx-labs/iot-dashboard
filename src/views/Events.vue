<template>
  <div>
    <v-alert
      outlined
      icon="mdi-school"
      type="info"
      color="blue-grey"
      text
    >Events displays the list of all actions that occured in your account.</v-alert>
    <EventList title="Events"></EventList>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import EventList from '@/components/EventList.vue';
export default Vue.extend({
  name: 'Events',
  components: { EventList },
});
</script>
