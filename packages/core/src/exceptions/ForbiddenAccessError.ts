import { CustomError } from "./index";

class ForbiddenAccessError extends CustomError {
  constructor(
    message?: string,
    public content?: unknown,
  ) {
    super(403, message || "You are not allowed to access this resource!");
    this.name = "ForbiddenAccessError";
    this.content = content;

    Object.setPrototypeOf(this, ForbiddenAccessError.prototype);
  }
}

export default ForbiddenAccessError;
