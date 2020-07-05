import axios, { AxiosInstance } from 'axios';
import { Device, Topic, Record, Event, AccountInformations, CreateDeviceRequest } from '../types';

export class ApiClient {
  private httpClient: AxiosInstance;
  constructor(endpoint: string) {
    this.httpClient = axios.create({
      baseURL: endpoint,
      timeout: 3000,
    });
  }
  async getAccountInformations(token: string): Promise<AccountInformations> {
    const resp = await this.httpClient.get(`/account/info/`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
    return (resp.data as AccountInformations);

  }
  async createAccount(token: string): Promise<AccountInformations> {
    const resp = await this.httpClient.post(`/account/`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
    return (resp.data as AccountInformations);
  }
  async createDevice(token: string, input: CreateDeviceRequest): Promise<void> {
    return this.httpClient.post(`/devices/`,
      {
        name: input.name,
        password: input.password,
        active: input.active,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
  }
  async getDevice(token: string, id: string): Promise<Device> {
    const resp = await this.httpClient.get(`/devices/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
    return (resp.data as Device);
  }
  async enableDevice(token: string, id: string): Promise<void> {
    return this.httpClient.patch(`/devices/${id}`,
      {
        "active": true
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
  }

  async disableDevice(token: string, id: string): Promise<void> {
    return this.httpClient.patch(`/devices/${id}`,
      {
        "active": false
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
  }
  async deleteDevice(token: string, id: string): Promise<void> {
    return this.httpClient.delete(`/devices/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
  }
  async listDevices(token: string): Promise<Device[]> {
    const resp = await this.httpClient.get('/devices/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return (resp.data as Device[]).sort((a, b) => a.name.localeCompare(b.name));
  }
  async listTopics(token: string): Promise<Topic[]> {
    const devices = await this.httpClient.get('/topics/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return (devices.data as Topic[]).sort((a, b) => a.name.localeCompare(b.name));
  }
  async getTopic(token: string, pattern: string): Promise<Record[]> {
    const resp = await this.httpClient.post('/topics/',
      {
        pattern,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
    return (resp.data as Record[]);
  }
  async getEvents(token: string): Promise<Event[]> {
    const resp = await this.httpClient.post('/events/',
      {
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
    return (resp.data as Event[])
  }

}