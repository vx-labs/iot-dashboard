<template>
  <v-container>
    <div class="ma-4">
      <h2 class="text-h2">
        <span class="font-weight-thin">{{ greeting }},&nbsp;</span>
        <span v-text="`${profile.given_name} ${profile.family_name.toUpperCase()}`" />
      </h2>
      <span class="font-weight-light">
        Welcome to your IoT Console.
        <br />Here's a short summary of your devices, topics and other resources.
      </span>
    </div>
    <v-row class="ma-4">
      <v-card outlined class="ma-2">
        <v-list>
          <v-subheader>Resources</v-subheader>
          <v-list-item-group>
            <v-list-item to="/devices">
              <v-list-item-icon>
                <v-icon>mdi-devices</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ devices.length }}</v-list-item-title>
                <v-list-item-subtitle>
                  <span class="font-weight-light">devices</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-routes</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>0</v-list-item-title>
                <v-list-item-subtitle>
                  <span class="font-weight-light">rules</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-card outlined class="ma-2">
        <v-list>
          <v-subheader>Usage</v-subheader>
          <v-list-item-group>
            <v-list-item to="/topics">
              <v-list-item-icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ topics.length}}</v-list-item-title>
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
                <v-list-item-title>{{ topics.reduce((acc, cur) => acc+(cur.messageCount||0), 0)}}</v-list-item-title>
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
                <v-list-item-title>{{ topics.reduce((acc, cur) => acc+(cur.sizeInBytes||0), 0)}}</v-list-item-title>
                <v-list-item-subtitle>
                  <span class="font-weight-light">published bytes</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Dashboard',
  computed: {
    ...mapGetters(["profile", "devices", "topics", "now"]),
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
