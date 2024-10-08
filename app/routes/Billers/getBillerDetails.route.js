import express from "express";
const router = express.Router();

import { getAllBillerCategory } from "../../controllers/biller/AllCategorys.controller.js";

import { allCurrency } from "../../controllers/biller/allCurrencys.controller.js";
import { countryDetails } from "../../controllers/biller/allCountryDetails.controller.js";
import { allBillFequencys } from "../../controllers/biller/allBillFequencys.controller.js";
import { addNewBiller } from "../../controllers/biller/addNewBiller.controller.js";
import { callApi, uploadBillFile } from "../../controllers/biller/uploadBillFile.controller.js";
import { billerPlanType } from "../../controllers/biller/billerPlanType.controller.js";
import { allSourceOfBill } from "../../controllers/biller/allSourceOfBill.controller.js";
import {

  allBillerInfo,
  integratedBillerInfo,
  notIntegratedBillerInfo,
} from "../../controllers/biller/allBillerInfo.controller.js";
import { billerIntegration } from "../../controllers/Integration/integration.controller.js";
import { fileFormat } from "../../controllers/biller/fileExtension.controller.js";
import { generateBillerCycle } from "../../controllers/biller/generateBillerCycle.js";
import { allFileLocation } from "../../controllers/biller/allFileLocation.controller.js";
import { updateTechnicalInfo } from "../../controllers/biller/updateBiller.controller.js";

router.route("/allcategory").get(getAllBillerCategory);
router.route("/allbiller").get(allBillerInfo);
router.route("/allnotintegratedbiller").get(notIntegratedBillerInfo);
router.route("/allintegratedbiller").get(integratedBillerInfo);
router.route("/alllocationfile").get(allFileLocation);

router.route("/updatetechinfo").post(updateTechnicalInfo);

router.route("/allcurrencydetails").get(allCurrency);
router.route("/allcountrydetails").get(countryDetails);
router.route("/allbillfequencys").get(allBillFequencys);
router.route("/allsourceofbills").get(allSourceOfBill);
router.route("/addnewbiller").post(addNewBiller);
router.route("/uploadBill").post(uploadBillFile);
router.get("/getPlanType", billerPlanType);

router.route("/integration").post(billerIntegration);
router.route("/file-format").get(fileFormat);

router.route("/generatebillercycle").post(generateBillerCycle);
router.route("/fetch-data-from-api").post(callApi);
export default router;
