<template>
  <v-card :dark="dark">
    <v-card-title>Records in {{ selectedTopic }}</v-card-title>
    <v-tabs v-model="tab" grow>
      <v-tab>History</v-tab>
      <v-tab>Graph</v-tab>
      <v-tab>Statistics</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-timeline dense v-if="selectedTopicRecords.length > 0">
              <v-timeline-item
                fill-dot
                small
                v-for="(item, key) in selectedTopicRecords"
                :key="key"
              >
                <v-card outlined :dark="dark">
                  <v-card-title>{{ item.payload }}</v-card-title>
                  <v-card-subtitle>
                    <HumanTimestamp :timestamp="item.timestamp"></HumanTimestamp>
                  </v-card-subtitle>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <Timeline :records="selectedTopicRecords"></Timeline>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <TopicStats></TopicStats>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Timeline from '@/components/Timeline.vue';
import TopicStats from '@/components/TopicStats.vue';
import HumanTimestamp from '@/components/HumanTimestamp.vue';
export default Vue.extend({
  name: 'deviceList',
  components: { Timeline, TopicStats, HumanTimestamp },
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
  },
  data: () => ({
    tab: null,
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