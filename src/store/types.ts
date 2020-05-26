import { ApiClient } from './services/api.service';

export interface Device {
  id: string;
  name: string;
  createdAt: number;
  active: boolean;
  password: string;
  connected: boolean;
  receivedBytes: number;
  sentBytes: number;
  subscriptionCount: number;
  humanStatus: string;
}
class Api {
  client = new ApiClient('https://api.iot.cloud.vx-labs.net');
}
class Resources {
  owner = '';
  devices: Device[] = [
    /*{
      id: '1', name: 'sensor-1', createdAt: 0, active: true, password: '', connected: true, receivedBytes: 19, sentBytes: 98, subscriptionCount: 5,
    },
    {
      id: '2', name: 'sensor-2', createdAt: 0, active: false, password: '', connected: false, receivedBytes: 19, sentBytes: 98, subscriptionCount: 5,
    },
    {
      id: '3', name: 'sensor-3', createdAt: 0, active: true, password: '', connected: false, receivedBytes: 19, sentBytes: 98, subscriptionCount: 5,
    }*/
  ];
}

export class MainState {
  api = new Api();
  resources = new Resources();
}