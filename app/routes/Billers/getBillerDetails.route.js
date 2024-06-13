import express from "express";
const router = express.Router();

import { getBillFrequencyPerDay, getBillFrequencyPerMontly, getBillFrequencyPerWeek, getBillFrequencyPerYearly } from "../../controllers/billFrequency.controller.js";
import { getAllBillerCategory } from "../../controllers/biller/AllCategorys.controller.js";
import { agentDetails } from "../../controllers/biller/allAgentDetails.controller.js";
import { allCurrency } from "../../controllers/biller/allCurrencys.controller.js";
import { countryDetails } from "../../controllers/biller/allCountryDetails.controller.js";
import { allBillFequencys } from "../../controllers/biller/allBillFequencys.controller.js";

router.route("/allcategory").get(getAllBillerCategory);
router.route("/allagentdetail").get(agentDetails);
router.route("/allcurrencydetails").get(allCurrency);
router.route("/allcountrydetails").get(countryDetails);
router.route("/allbillfequencys").get(allBillFequencys);
router.route("/getBillFrequencyPerDay").get(getBillFrequencyPerDay);
router.route("/getBillFrequencyPerWeek").get(getBillFrequencyPerWeek);
router.route("/getBillFrequencyPerMontly ").get(getBillFrequencyPerMontly);
router.route("/getBillFrequencyPerYearly").get(getBillFrequencyPerYearly);

export default router;
