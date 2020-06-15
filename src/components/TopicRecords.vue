<template>
  <v-card :dark="dark">
    <v-card-title>Records in {{ selectedTopic }}</v-card-title>
    <v-card-text>
      <v-timeline dense v-if="selectedTopicRecords.length > 0">
        <v-timeline-item fill-dot small v-for="(item, key) in selectedTopicRecords" :key="key">
          <v-card outlined :dark="dark">
            <v-card-title>{{ item.payload }}</v-card-title>
            <v-card-subtitle>{{ formatDate(item.timestamp) }}</v-card-subtitle>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { Topic } from '../store/types'
import moment from 'moment';
export default Vue.extend({
  name: 'deviceList',
  props: [
    'color',
    'dark',
  ],
  computed: {
    ...mapGetters([
      'topics',
      'selectedTopic',
      'selectedTopicRecords',
    ]),
  },
  methods: {
    ...mapActions([
      'refreshSelectedTopicRecords',
    ]),
    formatDate(timestamp: number): string {
      return moment(timestamp / 1000000).fromNow();
    }
  },
  data: () => ({
    search: '',
    selected: null,
    dialog: false,
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Message count', value: 'messageCount' },
      { text: 'Actions', value: 'actions', sortable: false },
    ]
  })
})
</script>