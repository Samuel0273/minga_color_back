import mongoose from "mongoose";

let url_link = process.env.MONGO;

mongoose
  .connect(url_link)
  .then(() => console.log("Database Connect"))
  .catch((error) => console.log(error));
