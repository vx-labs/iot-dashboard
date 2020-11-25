import axios, { AxiosInstance } from 'axios';
import { AccountInformations } from '../types';

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
}