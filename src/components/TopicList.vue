<template>
  <v-card :dark="dark">
    <v-data-table class="pa-4" :search="search" :headers="headers" :items="topics">
      <template v-slot:top>
        <v-toolbar dense flat :color="color">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-btn icon @click="refreshTopics">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{item}">
        <v-btn icon>
          <v-icon>mdi-chart-timeline-variant</v-icon>
        </v-btn>
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-if="item.active" @click="disableDevice(item.id)">
              <v-list-item-title>Disable</v-list-item-title>
            </v-list-item>
            <v-list-item v-else @click="enableDevice(item.id)">
              <v-list-item-title>Enable</v-list-item-title>
            </v-list-item>
            <v-list-item @click="deleteDevice(item.id)">
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
export default Vue.extend({
  name: 'deviceList',
  props: [
    'title',
    'color',
    'dark',
  ],
  computed: {
    ...mapGetters([
      'topics',
    ])
  },
  methods: {
    ...mapActions([
      'refreshTopics',
    ])
  },
  data: () => ({
    search: null,
    dialog: false,
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Message count', value: 'messageCount' },
      { text: 'Actions', value: 'actions', sortable: false },
    ]
  })
})
</script>