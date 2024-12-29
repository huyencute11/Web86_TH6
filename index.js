import express from "express";
import mongoose from "mongoose";
import RootRouter from "./routes/index.js";

//Connect with mongo db by using mongoose
mongoose.connect(
  // pass your connection mongodb string here
);

const app = express();
app.use(express.json());


app.use("/api/v1", RootRouter);

app.listen(8080, () => {
  console.log("Server is running!");
});
