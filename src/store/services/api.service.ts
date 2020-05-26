import axios, { AxiosInstance } from 'axios';
import { Device } from '../types';

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
    const devices = await this.httpClient.get('/devices/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return (devices.data as Device[]);
  }
}