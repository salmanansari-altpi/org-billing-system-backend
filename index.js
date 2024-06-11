import nodemon from "nodemon";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path"

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: '330mb',extended: true }));

app.use(
  bodyParser.urlencoded({ limit: "330mb", extended: true, parameterLimit: 50000 })
);
var corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));


app.listen(process.env.port,()=>{
    console.log("pr");
})