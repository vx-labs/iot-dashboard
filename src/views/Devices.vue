<template>
  <div>
    <v-alert outlined icon="mdi-school" type="info" color="blue-grey" text>
      To add a device, simply attempt to connect using an MQTT Client.
      <a
        @click="displayDeviceHelp=!displayDeviceHelp"
      >Click here to display connection informations.</a>
    </v-alert>
    <v-dialog max-width="600px" v-model="displayDeviceHelp">
      <v-card>
        <v-card-title>
          <span class="headline">Adding a new device</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <p>
                To add a new device to your account, connect using connection informations below.<br/>
                A new device will be created automatically, using the provided MQTT password.<br/>
                <br/>
                This device will be in <i>disabled</i> state, until you enable it.<br/>
                <br/>
                It is <strong>required</strong> that a device use the same MQTT client-id when reconnecting.
              </p>
            <v-row class="ma-4">
              <v-card outlined class="ma-2">
                <v-list>
                  <v-subheader>MQTT Connection informations</v-subheader>
                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-remote</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>wss://broker.iot.cloud.vx-labs.net:443/mqtt</v-list-item-title>
                        <v-list-item-subtitle>
                          <span class="font-weight-light">broker URL</span>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-devices</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title><i>You new device name</i></v-list-item-title>
                        <v-list-item-subtitle>
                          <span class="font-weight-light">MQTT Client ID</span>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{ username }}</v-list-item-title>
                        <v-list-item-subtitle>
                          <span class="font-weight-light">MQTT Username</span>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-lock</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title><i>An arbitrary random string</i></v-list-item-title>
                        <v-list-item-subtitle>
                          <span class="font-weight-light">MQTT Password</span>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="displayDeviceHelp = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <DeviceList title="Devices"></DeviceList>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import DeviceList from '@/components/DeviceList.vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
  name: 'Devices',
  components: { DeviceList },
  computed: {
    ...mapGetters(['username']),
  },
  data: () => ({
    displayDeviceHelp: false,
  }),
});
</script>
