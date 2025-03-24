import { CustomError } from "./index";

class BadRequestError extends CustomError {
  constructor(
    message?: string,
    public content?: unknown,
  ) {
    super(400, message || "Bad Request");
    this.name = "BadRequestError";
    this.content = content;

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

export default BadRequestError;
