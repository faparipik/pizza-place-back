import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import status from 'http-status';
import path from 'path';
import favicon from 'serve-favicon';
import errorHandler from './middlewares/error.js';
import ApiError from './utils/ApiError.js';
import apiv1 from './config/routesConfig.js';

const app = express();
const dirname = path.resolve();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(cors());
app.use(favicon(path.join(dirname, 'public', 'favicon.ico')));
app.use('/api/v1', apiv1);
app.options('*', cors());

app.use((req, res, next) => {
  next(new ApiError(status.NOT_FOUND, status[`${status.NOT_FOUND}_MESSAGE`]));
});

app.use(errorHandler);

export default app;
