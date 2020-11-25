import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApiClient } from './services/api.service';
export interface AccountInformations {
  id: string;
  usernames: string[];
}
export interface Application {
  id: string;
  name: string;
}
export interface ApplicationProfile {
  id: string;
  applicationId: string;
  name: string;
  enabled: boolean;
}
export interface Session {
  id: string;
  clientId: string;
  applicationId: string;
  applicationProfileId: string;
}

export interface Topic {
  name: string;
  messageCount: number;
  sizeInBytes: number;
  lastRecord?: Record;
  guessedContentType: string;
}
export interface Record {
  sentAt: Date;
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
class Api {
  client = new ApiClient('https://api.iot.cloud.vx-labs.net');
}
class Resources {
  selectedTopic = '';
  selectedTopicRecords: Record[] = [];
  topics: Topic[] = [
    /*
     { name: 'devices/a', messageCount:s 4 },
     { name: 'devices/b', messageCount: 20 },
     */
  ];
  applications: Application[] = [];
  applicationProfiles: ApplicationProfile[] = [];
  sessions: Session[] = [];
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
}

export class MainState {
  graphql?: ApolloClient<NormalizedCacheObject>;
  username?: string = undefined;
  api = new Api();
  resources = new Resources();
  now = new Date();
  startedAt = new Date();
}