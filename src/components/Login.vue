<template>
  <v-dialog v-model="dialog" max-width="450">
    <v-card>
      <v-card-title class="headline">Login</v-card-title>

      <v-card-text>
        You must be logged in to access this page.
        <br />Click the login button below to prove your identity.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          :loading="authenticationPending"
          :disabled="authenticationPending"
          @click="doLogin()"
        >Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    dialog: true,
  }),
  computed: {
    ...mapGetters(["authenticated", "authenticationPending"]),
  },
  methods: {
    ...mapActions(["login"]),
    doLogin() {
      const searchParams = new URLSearchParams(window.location.search);
      return this.login(searchParams.get('lastPage'));
    },
    doCheck() {
      if (this.authenticated) {
        const searchParams = new URLSearchParams(window.location.search);
        this.$router.replace(searchParams.get('lastPage'))
      }
    }
  },
  mounted() {
    this.$nextTick(() => this.doCheck());
  },
  watch: {
    authenticated() {
      this.doCheck();
    },
  }
}
</script>