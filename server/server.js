import mongoose from "mongoose";
import config from "./../config/config";
import app from "./express";

app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Server started on port ${config.port}`);
});

mongoose.connect(config.mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Database successfully connected");
});

mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect to database ${config.mongoUri}`);
});
