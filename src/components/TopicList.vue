<template>
  <v-card :dark="dark">
    <v-card-text>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-list two-line>
        <v-list-item-group v-model="selected">
          <template v-for="(item, index) in filteredTopics">
            <v-list-item :key="item.title">
              <template v-slot:default="{ }">
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                  <v-list-item-subtitle v-text="item.messageCount"></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-divider v-if="index + 1 < filteredTopics.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { Topic } from '../store/types'
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
    ]),
    filteredTopics() {
      return this.topics.filter((elt: Topic) =>
        this.search === null || this.search.length === 0 || elt.name.includes(this.search))
    }
  },
  methods: {
    ...mapActions([
      'refreshTopics',
    ])
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