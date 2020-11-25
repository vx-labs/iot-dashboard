<template>
  <v-card :dark="dark" :loading="areTopicsLoading">
    <v-data-table
      hide-default-header
      class="pa-4"
      :custom-filter="topicsFilter"
      :search="search"
      :headers="headers"
      :items="topics"
    >
      <template v-slot:top>
        <v-toolbar dense flat :color="color">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-btn icon @click="refreshState">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.humanTopic="{ item }">
        <v-list-item :key="item.title" @click="selectTopic(item.name)">
          <template v-slot:default="{}">
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
              <v-list-item-subtitle
                v-if="
                  item.lastRecord !== undefined &&
                  item.guessedContentType === 'text/plain; charset=utf-8'
                "
              >
                Last message: &nbsp;
                <span v-if="item.lastRecord.payload !== undefined">
                  <span v-if="item.lastRecord.payload.length < 30">{{
                    item.lastRecord.payload
                  }}</span>
                  <span v-else
                    >{{ item.lastRecord.payload.substring(0, 30) }}...</span
                  >
                </span>
                &nbsp;
                <HumanTimestamp
                  :timestamp="item.lastRecord.sentAt"
                ></HumanTimestamp>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text
                >{{ item.messageCount }} Messages</v-list-item-action-text
              >
              <v-list-item-action-text
                >{{ item.sizeInBytes }} Bytes</v-list-item-action-text
              >
            </v-list-item-action>
          </template>
        </v-list-item>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import HumanTimestamp from '@/components/HumanTimestamp.vue';
import { Topic } from '../store/types';
export default Vue.extend({
  name: 'topicList',
  components: { HumanTimestamp },
  props: [
    'title',
    'color',
    'dark',
  ],
  computed: {
    ...mapGetters([
      'topics',
      'selectedTopic',
      'areTopicsLoading'
    ]),
  },
  methods: {
    ...mapActions([
      'refreshState',
      'selectTopic'
    ]),
    topicsFilter(value: object, search: string | null, item?: Topic) {
      return item != null &&
        search != null &&
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    },
    decodeBase64(buffer: string): string { return atob(buffer) },
  },
  data: () => ({
    search: null,
    dialog: false,
    headers: [
      { text: 'Topic', value: 'humanTopic' },
    ]
  })
})
</script>