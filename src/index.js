import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const { PORT = 5555 } = process.env;

let server;

server = app.listen(PORT, (err) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log(`App is up and running on port: ${PORT}`);
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
