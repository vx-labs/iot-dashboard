<template>
  <v-navigation-drawer v-if="authenticated" app permanent :mini-variant="mini">
    <v-list dense>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="profile.picture"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            >{{ profile.given_name }}
            {{ profile.family_name.toUpperCase() }}</v-list-item-title
          >
          <v-list-item-subtitle>{{ profile.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home page</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/applications/">
        <v-list-item-icon>
          <v-icon>mdi-apps</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Applications</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/topics/">
        <v-list-item-icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Message Topics</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/events/">
        <v-list-item-icon>
          <v-icon>mdi-history</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Events</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <NightModeSelector></NightModeSelector>
      <AuthButton></AuthButton>
    </template>
  </v-navigation-drawer>
</template>
<script lang="ts">
import NightModeSelector from "@/components/NightModeSelector.vue";
import AuthButton from "@/components/AuthButton.vue";
import { mapGetters } from 'vuex'

import Vue from 'vue'
export default Vue.extend({
  components: { AuthButton, NightModeSelector },
  computed: {
    ...mapGetters(["authenticated", "profile"]),
    mini() {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  },
})
</script>