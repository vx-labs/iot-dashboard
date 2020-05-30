<template>
  <v-app>
    <AppDrawer></AppDrawer>
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
import AppDrawer from "@/components/AppDrawer.vue";
import Vue from 'vue';
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'App',
  components: { AppDrawer },
  methods: {
    ...mapActions(["handleAuthentication"])
  },
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
