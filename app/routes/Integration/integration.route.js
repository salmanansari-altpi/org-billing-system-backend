import express from "express";
const router = express.Router();

//switch
import { createSwitch } from "../../controllers/Integration/createSwitch.controller.js";
import { getAllSwitchData } from "../../controllers/Integration/getSwitchData.controller.js";
router.route("/createswitch").post(createSwitch);
router.route("/getswitchdata").get(getAllSwitchData);

//partnerBAnk
import { partnerBank } from "../../controllers/Integration/partnerbank.controller.js";
import { getAllpartnerBanks } from "../../controllers/Integration/getPartnerBankData.controller.js";
router.route("/createpartnerBank").post(partnerBank);
router.route("/getPartnerBank").get(getAllpartnerBanks);





export default router;