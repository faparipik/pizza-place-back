import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/config.js";

await mongoose.connect(config.mongoose.url, config.mongoose.options);

const { port } = config;

let server;

server = app.listen(port, (err) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log(`App is up and running on port: ${port}`);
});

const unexpectedErrorHandler = (error) => {
  console.log(error);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
    return;
  }
  process.exit(1);
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
