import status from "http-status";

const { NODE_ENV = "development" } = process.env;

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (NODE_ENV === "production") {
    statusCode = status.INTERNAL_SERVER_ERROR;
    message = status[status.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(NODE_ENV === "development" && { stack: err.stack }),
  };

  if (NODE_ENV === "development") {
    console.log(err);
  }

  res.status(statusCode).send(response);
};

export default errorHandler;
