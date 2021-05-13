class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    ErrorHandler.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
