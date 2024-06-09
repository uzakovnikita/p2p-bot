import { config } from "../../config";
import {
  BadRequestError,
  InvalidResponse,
  ServerError,
  InternalAdminApiError,
} from "../errors";
import { ApiStatuses } from "./constants";

class AdminApi {
  host: string;
  constructor() {
    this.host = config.adminApiUrl || '';
  }

  async makeRequest(method: string, path: string, data?: Record<string, any>) {
    let response: Response;
    try {
      response = await fetch(`${this.host}${path}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
      throw new InternalAdminApiError(e as Error);
    }

    if (response.status === 500) {
      throw new ServerError("Server error");
    }

    let jsonData: {
      [key: string]: any;
      status: ApiStatuses;
      error?: string;
    };

    try {
      jsonData = await response.json();
    } catch (e) {
      throw new InvalidResponse((e as Error).message);
    }

    if (response.ok) {
      return jsonData;
    }

    const errorMessage = jsonData.error || "Bad request error";

    throw new BadRequestError(errorMessage);
  }

  async get<T = Record<string, any>>(
    path: string,
    query?: Record<string, any>
  ): Promise<(T & { status: ApiStatuses }) | { status: ApiStatuses }> {
    try {
      const url = `${path}?${new URLSearchParams(query)}`;
      const data = await this.makeRequest("GET", url);
      return {
        ...data,
        status: ApiStatuses.ok,
      };
    } catch (e) {
      // TODO: handle error
      console.log((e as Error).message);
      return {
        status: ApiStatuses.error,
      };
    }
  }

  async post<Data extends Record<string, any> = Record<string, any>>(
    path: string,
    data?: Data
  ): Promise<{ status: ApiStatuses }> {
    try {
      await this.makeRequest("POST", path, data);
      return {
        status: ApiStatuses.ok,
      };
    } catch (e) {
      // TODO: handle error
      console.log(e);
      return {
        status: ApiStatuses.error,
      };
    }
  }
}

export const adminApi = new AdminApi();
