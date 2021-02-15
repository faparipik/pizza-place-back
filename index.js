import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const { PORT = 5555 } = process.env;


app.use(express.json());

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App is up and running on port: ${PORT}`);
  }
});
