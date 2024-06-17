import express from "express";
const router = express.Router();


import { createPayAuthority } from "../../controllers/Integration/createPayAuthority.controller.js";

import { readPayAuthority } from "../../controllers/Integration/readPayAuthority.controller.js";


 
router.route("/payauthoritycreate").post(createPayAuthority);
router.route("/readpayauthority").get(readPayAuthority);



export default router;
