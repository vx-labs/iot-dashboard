import { ApiClient } from './services/api.service';
export interface AccountInformations {
  username: string;
}
export interface Topic {
  name: string;
  messageCount: number;
  sizeInBytes: number;
  lastRecord?: Record;
}
export interface Record {
  timestamp: number;
  topic: string;
  payload: string;
  publisher: string;
}
export interface Event {
  timestamp: number;
  kind: string;
  service: string;
  attributes: { [name: string]: string };
}
export interface CreateDeviceRequest {
  name: string;
  password: string;
  active: boolean;
}
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
  selectedTopic = '';
  selectedTopicRecords: Record[] = [];
  topics: Topic[] = [
    /*
     { name: 'devices/a', messageCount:s 4 },
     { name: 'devices/b', messageCount: 20 },
     */
  ];
  events: Event[] = [
    /* {
       service: "wasp", kind: "session_connected", timestamp: 0, attributes: {
         "session_id": "1"
       }
     },
     {
       service: "wasp", kind: "session_disconnected", timestamp: 10, attributes: {
         "session_id": "1"
       }
     },*/
  ]
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