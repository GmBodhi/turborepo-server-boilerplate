import { CustomError } from "./index";

class UnprocessableEntityError extends CustomError {
  constructor(
    message?: string,
    public content?: unknown,
  ) {
    super(422, message || "Unprocessable Entity");
    this.name = "UnprocessableEntityError";
    this.content = content;

    Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
  }
}

export default UnprocessableEntityError;
