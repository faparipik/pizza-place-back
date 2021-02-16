import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import status from 'http-status';
import errorHandler from './middlewares/error.js';
import ApiError from './utils/ApiError.js';

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(cors());
app.options('*', cors());

app.use((req, res, next) => {
  next(new ApiError(status.NOT_FOUND, status[`${status.NOT_FOUND}_MESSAGE`]));
});

app.use(errorHandler);

export default app;
