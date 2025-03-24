import { CustomError } from "./index";

class DuplicatedDataError extends CustomError {
  constructor(
    message?: string,
    public content?: unknown,
  ) {
    super(409, message || "The data is already in the database!");
    this.name = "DuplicatedDataError";
    this.content = content;

    Object.setPrototypeOf(this, DuplicatedDataError.prototype);
  }
}

export default DuplicatedDataError;
