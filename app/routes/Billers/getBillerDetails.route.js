import express from "express";
const router = express.Router();

import { getAllBillerCategory } from "../../controllers/biller/AllCategorys.controller.js";
import { agentDetails } from "../../controllers/biller/allAgentDetails.controller.js";
import { allCurrency } from "../../controllers/biller/allCurrencys.controller.js";
import { countryDetails } from "../../controllers/biller/allCountryDetails.controller.js";

router.route("/allcategory").get(getAllBillerCategory);
router.route("/allagentdetail").get(agentDetails);
router.route("/allcurrencydetails").get(allCurrency);
router.route("/allcountrydetails").get(countryDetails);

export default router;
