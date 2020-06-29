<template>
  <v-card :dark="dark" :loading="areEventsLoading">
    <v-data-table class="pa-4" sort-by="timestamp" sort-desc :headers="headers" :items="events" item-key="timestamp">
      <template v-slot:top>
        <v-toolbar dense flat :color="color">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn icon @click="refreshEvents">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.timestamp="{ item }">
        <HumanTimestamp :timestamp="item.timestamp"></HumanTimestamp>
      </template>
      <template v-slot:item.actions="{item}">{{ formatEvent(item) }}</template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import HumanTimestamp from '@/components/HumanTimestamp.vue';
import { Event } from '@/store/types';
import { Device } from '../store/types';

export default Vue.extend({
  name: 'deviceList',
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
      'devices'
    ])
  },
  methods: {
    ...mapActions([
      'deleteDevice',
      'enableDevice',
      'disableDevice',
      'refreshEvents',
    ]),
    resolveDeviceName(id: string): string {
      const device = this.devices.find((elt: Device) => elt.id === id);
      if (device !== undefined) { return device.name }
      return id;
    },
    formatEvent(event: Event): string {
      switch (event.service) {
        default:
          switch (event.kind) {
            case 'session_connected':
              return `${this.resolveDeviceName(event.attributes.session_id)} connected`
            case 'subscription_created':
              return `${this.resolveDeviceName(event.attributes.session_id)} subscribed to topic ${event.attributes.pattern} with QoS ${event.attributes.qos}`
            case 'subscription_deleted':
              return `${this.resolveDeviceName(event.attributes.session_id)} unsubscribed from topic ${event.attributes.pattern}`
            case 'session_disconnected':
              return `${this.resolveDeviceName(event.attributes.session_id)} disconnected`
            default:
              return `wasp:${event.kind} (${JSON.stringify(event.attributes)})`
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