import axios, { AxiosInstance } from "axios";

class Api {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  public async register(phoneNumber: string, walletAddress: string) {
    const { data: registerResponse } = await this.client.post<string>(
      "/mobile/register",
      {
        phoneNumber,
        walletAddress
      }
    );

    return registerResponse;
  }

  public async verify(code: string) {
    const { data: verifyResponse } = await this.client.post<string>(
      "/mobile/verify",
      {
        code
      }
    );

    return verifyResponse;
  }
}

const api = new Api();

export default api;
