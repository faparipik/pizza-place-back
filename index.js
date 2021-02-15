import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5555;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App is up and running on port: ${PORT}`);
  }
});
