<template>
  <v-row>
    <v-col>
      <TopicList title="Topics"></TopicList>
    </v-col>
    <v-col v-if="selectedTopic.length > 0">
      <TopicRecords></TopicRecords>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import TopicList from '@/components/TopicList.vue';
import TopicRecords from '@/components/TopicRecords.vue';

export default Vue.extend({
  name: 'Devices',
  components: {
    TopicList,
    TopicRecords,
  },
  computed: {
    ...mapGetters([
      'selectedTopic',
    ]),
  },
});
</script>
