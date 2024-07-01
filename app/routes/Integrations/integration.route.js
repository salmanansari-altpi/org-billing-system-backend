import express from "express";
const router = express.Router();
import { partnerBank } from "../../controllers/Integration/partnerbank.controller.js";
import { getAllpartnerBanks } from "../../controllers/Integration/getPartnerBankData.controller.js";
import { createSwitch } from "../../controllers/Integration/createSwitch.controller.js";
import { getAllSwitchData } from "../../controllers/Integration/getSwitchData.controller.js";
import { createPayAuthority, readPayAuthority } from "../../controllers/Integration/readPayAuthority.controller.js";
import { getProducts } from "../../controllers/Integration/product.controller.js";

router.route("/createswitch").post(createSwitch);
router.route("/getswitchdata").get(getAllSwitchData);

router.route("/createpartnerBank").post(partnerBank);
router.route("/getPartnerBank").get(getAllpartnerBanks);

router.route("/createpayauthority").post(createPayAuthority);
router.route("/payauthority").get(readPayAuthority);
router.route("/product").get(getProducts);

export default router;
