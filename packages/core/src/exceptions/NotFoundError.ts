import { CustomError } from "./index";

class NotFoundError extends CustomError {
  constructor(
    message?: string,
    public content?: unknown,
  ) {
    super(404, message || "Resources Not Found!");
    this.name = "NotFoundError";
    this.content = content;

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export default NotFoundError;
