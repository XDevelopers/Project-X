class ApiError extends Error {
  constructor(statusCode, error, message, stack) {
    super(message);

    this.statusCode = statusCode;
    this.error = error;
    this.message = message;

    // Capture stack trace if not provided
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };