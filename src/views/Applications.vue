<template>
  <div>
    <v-alert outlined icon="mdi-school" type="info" color="blue-grey" text>
      Applications are private message namespaces.
      <br />
      Sessions connect to applications using Application Profiles.</v-alert
    >
    <ApplicationList title="Applications"></ApplicationList>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ApplicationList from '@/components/ApplicationList.vue';
export default Vue.extend({
  components: { ApplicationList },
});
</script>
