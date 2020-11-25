<template>
  <div>
    <v-row class="ma-4" align="center" justify="center">
      <h2 class="text-h2">
        <span class="font-weight-thin">{{ greeting }},&nbsp;</span>
        <span
          v-text="`${profile.given_name} ${profile.family_name.toUpperCase()}`"
        />
      </h2>
    </v-row>
    <v-row class="ma-4" align="center" justify="center">
      <span class="font-weight-light">
        Here's a short summary of your applications, topics and other resources.
      </span>
    </v-row>
    <v-row class="ma-4" justify="center">
      <v-col>
        <v-card outlined class="ma-4">
          <v-list>
            <v-subheader>Resources</v-subheader>
            <v-list-item-group>
              <v-list-item to="/applications">
                <v-list-item-icon>
                  <v-icon>mdi-apps</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    applications.length
                  }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="font-weight-light">applications</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-lock</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    applicationProfiles.length
                  }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="font-weight-light">application profiles</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined class="ma-4">
          <v-list>
            <v-subheader>Usage</v-subheader>
            <v-list-item-group>
              <v-list-item to="/topics">
                <v-list-item-icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ topics.length }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="font-weight-light">messages topics</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="/topics">
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    topics.reduce(
                      (acc, cur) => acc + (cur.messageCount || 0),
                      0
                    )
                  }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="font-weight-light">published messages</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="/topics">
                <v-list-item-icon>
                  <v-icon>mdi-harddisk</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{
                    topics.reduce((acc, cur) => acc + (cur.sizeInBytes || 0), 0)
                  }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="font-weight-light">published bytes</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-devices</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ sessions.length }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="font-weight-light">connected sessions</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Dashboard',
  computed: {
    ...mapGetters(["sessions", "profile", "topics", "now", "applications", "applicationProfiles"]),
    greeting() {
      const splitAfternoon = 12 //24hr time to split the afternoon
      const splitEvening = 17 //24hr time to split the evening
      const currentHour = (this.now as Date).getHours();
      const prefix = 'Good';

      if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
        return `${prefix} afternoon`;
      } else if (currentHour >= splitEvening) {
        return `${prefix} evening`;
      } else {
        return `${prefix} morning`;
      }
    },

  },
});
</script>
