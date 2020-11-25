<template>
  <v-row align="center" justify="center">
    <v-col v-for="application in applications" :key="application.id">
      <v-card :dark="dark" outlined class="ma-4" max-width="350px" >
        <v-card-title>
          {{ capitalizeFirstLetter(application.name) }}
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item-group>
              <v-subheader>Configuration</v-subheader>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-lock</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    {{
                      applicationProfiles.filter(
                        (elt) => elt.applicationId === application.id
                      ).length
                    }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="font-weight-light">Profiles</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group>
              <v-subheader>Usage</v-subheader>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-devices</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    sessions.filter(
                      (elt) => elt.applicationId === application.id
                    ).length
                  }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="font-weight-light">Connected sessions</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    topics.filter((elt) => elt.applicationId === application.id)
                      .length
                  }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="font-weight-light">Message topics</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="deleteApplication(application.id)" icon
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
export default Vue.extend({
  props: [
    'title',
    'color',
    'dark',
  ],
  computed: {
    ...mapGetters([
      'applications',
      'sessions',
      'topics',
      'applicationProfiles'
    ])
  },
  methods: {
    ...mapActions([
      'deleteApplication',
      'refreshState',
    ]),
    capitalizeFirstLetter([first, ...rest]: string, locale = navigator.language) {
      return [first.toLocaleUpperCase(locale), ...rest].join('');
    }
  },
  data: () => ({
    search: null,
    dialog: false,
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Profiles', value: 'profiles' },
      { text: 'Connected Sessions', value: 'sessions' },
      { text: 'Topics', value: 'topics' },
      { text: 'Actions', value: 'actions', sortable: false },
    ]
  })
})
</script>