class AdminApi {
  host: string;
  constructor() {
    this.host = "http://localhost:4000/api";
  }

  async makeRequest(method: string, path: string, data?: Record<string, any>) {
    const response = await fetch(`${this.host}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      try {
        return response.json();
      } catch (e) {
        throw new Error("Invalid response from server");
      }
    } else {
      throw new Error(response.statusText);
    }
  }

  async get<T = Record<string, any>>(path: string): Promise<T> {
    return this.makeRequest("GET", path);
  }

  post<T = Record<string, any>>(path: string, data: Record<string, any>): Promise<T> {
    return this.makeRequest("POST", path, data);
  }
}

export const adminApi = new AdminApi();
