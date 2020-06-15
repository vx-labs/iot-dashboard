import axios, { AxiosInstance } from 'axios';
import { Device, Topic, Record } from '../types';

export class ApiClient {
  private httpClient: AxiosInstance;
  constructor(endpoint: string) {
    this.httpClient = axios.create({
      baseURL: endpoint,
      timeout: 3000,
    });
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

}