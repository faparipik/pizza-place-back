import status from 'http-status';

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const { NODE_ENV = 'development' } = process.env;
  let { statusCode, message } = err;
  if (NODE_ENV === 'production') {
    statusCode = status.INTERNAL_SERVER_ERROR;
    message = status[status.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(NODE_ENV === "development" && { stack: err.stack }),
  };

  if (NODE_ENV === 'development') {
    throw new Error(err);
  }

  res.status(statusCode).send(response);
};

export default errorHandler;
