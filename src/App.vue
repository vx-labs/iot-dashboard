<template>
  <v-app>
    <v-navigation-drawer v-if="authenticated" app permanent expand-on-hover>
      <v-list two-line>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img :src="profile.picture"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ profile.given_name}} {{ profile.family_name}}</v-list-item-title>
            <v-list-item-subtitle>{{ profile.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense v-if="authenticated">
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home page</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/devices/">
          <v-list-item-icon>
            <v-icon>mdi-devices</v-icon>
          </v-list-item-icon>
          <v-list-item-title>My IoT Devices</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <AuthButton></AuthButton>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app color="white" dense>
      <v-toolbar-title>🐝 Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import AuthButton from "@/components/AuthButton.vue";
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex'
export default Vue.extend({
  name: 'App',
  components: { AuthButton },
  methods: {
    ...mapActions(["handleAuthentication"])
  },
  computed: {
    ...mapGetters(["authenticated", "profile"])
  },
  data: () => ({
    items: [{ title: "Devices", "icon": "bug" }]
  }),
  mounted() {

    this.handleAuthentication().then(() => {
      if (
        window.location.search.includes("code=")) {
        const lastPath = this.$store.getters.lastPath;
        if (lastPath !== undefined) {
          this.$router.replace(lastPath);
        } else {
          this.$router.replace(window.location.pathname);
        }
      }
    })
  },
});
</script>
