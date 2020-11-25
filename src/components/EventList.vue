<template>
  <v-card :dark="dark" :loading="areEventsLoading">
    <v-data-table
      class="pa-4"
      sort-by="timestamp"
      sort-desc
      :headers="headers"
      :items="events"
      item-key="timestamp"
    >
      <template v-slot:top>
        <v-toolbar dense flat :color="color">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.timestamp="{ item }">
        <HumanTimestamp :timestamp="item.timestamp"></HumanTimestamp>
      </template>
      <template v-slot:item.actions="{ item }">{{
        formatEvent(item)
      }}</template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import HumanTimestamp from '@/components/HumanTimestamp.vue';
import { Event } from '@/store/types';

export default Vue.extend({
  components: { HumanTimestamp },
  props: [
    'title',
    'color',
    'dark',
  ],
  computed: {
    ...mapGetters([
      'events',
      'areEventsLoading',
    ])
  },
  methods: {
    formatEvent(event: Event): string {
      switch (event.service) {
        case 'vespiary': {
          switch (event.kind) {
            default:
              return `${event.service}:${event.kind} (${JSON.stringify(event.attributes)})`
          }
        }
        default:
          switch (event.kind) {
            case 'session_connected':
              return `${event.attributes.session_id} connected`
            case 'session_disconnected':
              return `${event.attributes.session_id} disconnected`
            default:
              return `${event.service || 'wasp'}:${event.kind} (${JSON.stringify(event.attributes)})`
          }
      }
    },
  },
  data: () => ({
    headers: [
      { text: 'Timestamp', value: 'timestamp', width: 250 },
      { text: 'Action', value: 'actions' },
    ]
  })
})
</script>