import express from "express";
import AuthRouter from "./Routes/Auth.routes.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());


app.use("/api/Auth", AuthRouter);

app.use((err, req, res, next) => {
  const message = err.message || 'Something went wrong';
  const code = err.status || 500;

  const error = {
    message,
    code,
  };
  console.log(error)
  return res.status(error.code).json(error.message);
});

app.listen(3000, async () => {
  await mongoose.connect(process.env.MONGO)
  .then(()=>{
    console.log("Database Connected ! server is up and running on port 3000");
  })
  .catch((err)=>{
    console.log(err)
  })
  
});
