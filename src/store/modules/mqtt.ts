import { Module } from 'vuex';
import { connect } from 'mqtt';
import { Device, MQTTEvent } from '../types';
class MqttState {
  connected = false;
  clientId = 'web-console'
}


const NewMQTTModule = (): Module<any, any> => ({
  state: new MqttState(),
  getters: {
  },
  mutations: {
  },
  actions: {
    async startMQTTClient({ commit, state, getters, dispatch }) {
      if (getters.devices.length === 0) {
        await dispatch('refreshDevices');
      }
      const password = Math.random().toString(36).substr(2, 16);

      const existingDevice: Device = getters.devices.find((elt: Device) => elt.name === state.clientId)
      if (existingDevice !== undefined) {
        await this.dispatch('deleteDevice', existingDevice.id);
      }
      await this.dispatch('createDevice', { name: state.clientId, active: true, password: password })

      return this.dispatch('mqtt/load', async () => new Promise((resolve, reject) => {
        const client = connect('wss://broker.iot.cloud.vx-labs.net:443/mqtt', {
          connectTimeout: 3 * 1000,
          protocolId: 'MQIsdp',
          protocolVersion: 3,
          clientId: state.clientId,
          username: 'vx:psk',
          password: password,
          host: 'broker.iot.cloud.vx-labs.net',
          hostname: 'broker.iot.cloud.vx-labs.net',
        });
        client.on('message', (topic, message) => {
          if (topic === '$SYS/_audit/events') {
            const event: MQTTEvent = JSON.parse(message.toString("utf-8"));
            console.log(event);
            switch (event.service) {
              default: {
                switch (event.event_kind) {
                  case 'session_connected': {
                    commit('deviceConnected', event.session_id);
                    break;
                  }
                  case 'session_disconnected': {
                    commit('deviceDisconnected', event.session_id);
                    break;
                  }
                  case 'subscription_created': {
                    commit('deviceSubscribed', event.session_id);
                    break;
                  }
                  case 'subscription_deleted': {
                    commit('deviceUnsubscribed', event.session_id);
                    break;
                  }
                }
              }
            }
          }
        });
        client.on('connect', () => {
          client.subscribe('$SYS/_audit/events', { qos: 1 }, (err) => {
            if (err === null) {
              resolve();
            } else {
              reject(err);
            }
          })
        });
        client.on('error', (err) => reject(err));
      }));
    },
  },
});

export default NewMQTTModule;