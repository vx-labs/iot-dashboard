<template>
  <div>
    <v-alert outlined icon="mdi-school" type="info" color="blue-grey" text>
      Topics displays an aggregated view of all MQTT messages published in your account, aggregated by topic.
      <br />Click on a topic to display messages published in it.
    </v-alert>

    <v-row>
      <v-col>
        <TopicList title="Topics"></TopicList>
      </v-col>
      <v-col v-if="selectedTopic.length > 0">
        <TopicRecords></TopicRecords>
      </v-col>
    </v-row>
  </div>
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
