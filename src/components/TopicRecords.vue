<template>
  <v-card :dark="dark" :loading="isSelectedTopicRecordsLoading">
    <v-card-title>
      <v-toolbar dense flat :color="color">
        <v-toolbar-title>{{ selectedTopic }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn icon @click="refreshSelectedTopicRecords">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card-title>
    <v-tabs v-model="tab" grow>
      <v-tab>History</v-tab>
      <v-tab>Graph</v-tab>
      <v-tab>Statistics</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-data-table
          hide-default-header
          sort-by="timestamp"
          sort-desc
          class="pa-4"
          :headers="headers"
          :items="selectedTopicRecords"
        >
          <template v-slot:item.humanRecords="{ item }">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="item.payload"></v-list-item-title>
                <v-list-item-subtitle v-if="devices.length > 0">
                  Published by:
                  &nbsp;
                  <span
                    class="text--primary"
                  >{{ resolveDeviceName(item.publisher) }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>
                  <HumanTimestamp :timestamp="item.timestamp"></HumanTimestamp>
                </v-list-item-action-text>
                <v-list-item-action-text>{{ item.payload.length }} Bytes</v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-data-table>
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
import { Device } from '../store/types';
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
      'isSelectedTopicRecordsLoading',
      'devices'
    ]),
  },
  methods: {
    ...mapActions([
      'refreshSelectedTopicRecords',
    ]),
    resolveDeviceName(id: string): string {
      const device = this.devices.find((elt: Device) => elt.id === id);
      if (device !== undefined) { return device.name }
      return 'Unavailable';
    }
  },
  data: () => ({
    tab: null,
    search: '',
    selected: null,
    dialog: false,
    headers: [
      { text: 'Records', value: 'humanRecords' },
    ]

  })
})
</script>