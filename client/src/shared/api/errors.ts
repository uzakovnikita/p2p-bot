export class BadRequestError extends Error {}
export class ServerError extends Error {}
export class InvalidResponse extends Error {
  error?: Error;

  constructor(e?: Error) {
    super("Invalid response from server: " + (e ? e.message : ""));
    this.name = "InvalidResponse";
    this.error = e;
  }
}
