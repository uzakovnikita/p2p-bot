import { BadRequestError, InvalidResponse, ServerError } from "../errors";
import { ApiStatuses } from "./constants";

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
    
    let jsonData;

    try {
      jsonData = await response.json();
    } catch (e) {
      throw new InvalidResponse(e as SyntaxError);
    }

    if (response.ok) {
      return jsonData;
    } else {
      const errorMessage = jsonData.error || "Server error";
      switch (response.status) {
        case 400:
          throw new BadRequestError(errorMessage);
        default:
          throw new ServerError(errorMessage);
      }
    }
  }

  async get<T = Record<string, any>>(
    path: string
  ): Promise<T & { status: ApiStatuses }> {
    return this.makeRequest("GET", path);
  }

  post<Data extends Record<string, any> = Record<string, any>, Response = Record<string, any>>(
    path: string,
    data?: Data
  ): Promise<{ status: ApiStatuses } & Response> {
    return this.makeRequest("POST", path, data);
  }
}

export const adminApi = new AdminApi();
