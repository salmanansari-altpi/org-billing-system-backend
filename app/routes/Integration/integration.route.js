import express from "express";
const router = express.Router();
import { createSwitch } from "../../controllers/Integration/createSwitch.controller.js";
import { getAllSwitchData } from "../../controllers/Integration/getSwitchData.controller.js";

router.route("/createswitch").post(createSwitch);
router.route("/getswitchdata").get(getAllSwitchData);




export default router;