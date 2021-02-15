import mongoose from 'mongoose';
import app from './app.js';
import config from './config/config.js';

let server;

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  const { port } = config;

  server = app.listen(port, (err) => {
    if (err) {
      process.stdout.write('err', err);
      return;
    }
    process.stdout.write(`App is up and running on port: ${port}`);
  });
});

const unexpectedErrorHandler = (error) => {
  process.stdout.write(error);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
    return;
  }
  process.exit(1);
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
