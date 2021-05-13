// const ErrorHandler = require("../../utils/errorHandler");
import ErrorHandler from "../../utils/errorHandler";

export default (err, req, res, next) => {
  let error = { ...err };
  err.statusCode = err.statusCode || 500;

  //  the catch for the wrong mongoose id
  error.message = err.message;

  if (err.name == "CastError") {
    const message = `Resource not found. invalid : ${err.path} `;
    error = new ErrorHandler(message, 400);
  }

  // to handle for the Validation Error

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
