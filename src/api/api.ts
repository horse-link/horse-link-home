import axios, { AxiosInstance } from "axios";

class Api {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: ["application/json", "text/plain"]
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

  public async registerTweet(tweetUrl: string, walletAddress: string) {
    const { data: registerTweetResponse } = await this.client.post<string>(
      "/tweetRegister",
      {
        tweetUrl,
        walletAddress
      }
    );

    return registerTweetResponse;
  }
}

const api = new Api();

export default api;
