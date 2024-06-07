export class BadRequestError extends Error {
  constructor(message: string) {
    super("Bad request: " + message);
    this.name = "BadRequest";
  }
}
export class ServerError extends Error {
  constructor(message: string) {
    super("Server Error: " + message);
    this.name = "ServerError";
  }
}
export class InvalidResponse extends Error {
  constructor(message: string) {
    super("Invalid response from server: " + message);
    this.name = "InvalidResponse";
  }
}

export class InternalAdminApiError extends Error {
  error?: Error;
  constructor(e?: Error) {
    super("Internal admin api error: " + (e ? e.message : ""));
    this.name = "InternalAdminApiError";
    this.error = e;
  }
}
