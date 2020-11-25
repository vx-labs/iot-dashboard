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
      <v-tab :disabled="!isGraphAvailable">Graph</v-tab>
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
          :items="
            selectedTopicRecords.filter(
              (elt) => elt.payload !== undefined && elt.payload.length > 0
            )
          "
        >
          <template v-slot:item.humanRecords="{ item }">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  v-if="
                    topics.find((elt) => elt.name === selectedTopic)
                      .guessedContentType === 'text/plain; charset=utf-8'
                  "
                  v-text="item.payload"
                ></v-list-item-title>
                <v-list-item-title
                  v-else-if="
                    topics.find((elt) => elt.name === selectedTopic)
                      .guessedContentType === 'image/jpeg'
                  "
                >
                  <img :src="encodeImage(item.payload)" />
                </v-list-item-title>
                <v-list-item-title
                  v-else
                  v-text="'<Binary payload hidden>'"
                ></v-list-item-title>
                <v-list-item-subtitle>
                  Published by: &nbsp;
                  <span>{{ item.sentBy }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>
                  <HumanTimestamp :timestamp="item.sentAt"></HumanTimestamp>
                </v-list-item-action-text>
                <v-list-item-action-text
                  >{{
                    item.payload ? item.payload.length : 0
                  }}
                  Bytes</v-list-item-action-text
                >
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-data-table>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <Timeline
              id="records"
              :records="timelineSerie"
              :customBars="true"
            ></Timeline>
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
import { Record } from '../store/types';

interface RecordNumber {
  sentAt: Date;
  payload: number;
}

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
    ]),
    isGraphAvailable() {
      if (this.selectedTopicRecords === undefined || this.selectedTopicRecords === null) {
        return false;
      }
      return true;
    },
    buckets() {
      return (this.selectedTopicRecords as Record[])
        .reverse()
        .map((elt: Record): RecordNumber => ({
          sentAt: elt.sentAt,
          payload: parseInt(elt.payload),
        }))
        .reduce((buckets: RecordNumber[][], cur: RecordNumber): RecordNumber[][] => {
          if (buckets.length == 0) {
            buckets.push([cur]);
            return buckets;
          }
          const periodStart = (buckets[buckets.length - 1])[0].sentAt;
          if ((periodStart.getTime() - cur.sentAt.getTime()) > 15*60*1000) {
            buckets.push([cur]);
          } else {
            buckets[buckets.length - 1].push(cur);
          }
          return buckets;
        }, [])
        .reverse();
    },
    timelineSerie() {
      const v = (this.buckets as RecordNumber[][])
        .map(elt => elt.sort((a, b) => a.payload - b.payload))
        .map((elt) => [
          elt[0].sentAt,
          [
            elt[0].payload,
            elt.reduce((sum, cur) => sum + cur.payload, 0) / elt.length,
            elt[elt.length - 1].payload,
          ],
        ])
      return v
    }
  },
  methods: {
    ...mapActions([
      'refreshSelectedTopicRecords',
    ]),
    decodeBase64(buffer: string): string { return atob(buffer) },
    encodeImage(buffer: string): string {
      const a = `data:image/jpeg;base64,${buffer}`;
      return a;
    },
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