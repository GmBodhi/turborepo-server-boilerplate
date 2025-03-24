class CustomError extends Error {
  constructor(
    public code: number,
    message: string,
    public data?: unknown,
  ) {
    super(message);
    this.data = data;
  }
}

export default CustomError;
