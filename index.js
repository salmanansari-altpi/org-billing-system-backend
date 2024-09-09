import nodemon from "nodemon";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import session from "express-session";
import path from "path";

export const otps = [];
export const veriedMobileNos = [];

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "330mb", extended: true }));
app.use(
  session({ secret: "khuljasimsim", resave: true, saveUninitialized: true })
);

app.use(
  bodyParser.urlencoded({
    limit: "330mb",
    extended: true,
    parameterLimit: 50000,
  })
);
var corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Import routes from the index.js file inside the routes folder
import routes from "./app/routes/index.js";
import exp from "constants";
import { sendNotification } from "./app/utils/firebaseNoti.js";

// Mount routes defined in the routes/index.js file
app.use("/", routes);

app.post("/fcm", async (req, res) => {
  const { token, txnId, body } = req.body;
  const id = 12345;

  if (txnId != id) {
    return res.status(400).json({ success: false, message: "Payment Failed!" });
  }
  await sendNotification(token, "Testing", body);
  
  res.status(200).json({
    success: true,
    messgae: "Notification Send Success!",
    body,
    token,
  });
});

app.listen(process.env.Workspace_PORT, () => {
  console.log(
    `listening on port: http://localhost:${process.env.Workspace_PORT} `
  );
});
