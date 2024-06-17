import express from "express";
const router = express.Router();

import { getAllBillerCategory } from "../../controllers/biller/AllCategorys.controller.js";

import { allCurrency } from "../../controllers/biller/allCurrencys.controller.js";
import { countryDetails } from "../../controllers/biller/allCountryDetails.controller.js";
import { allBillFequencys } from "../../controllers/biller/allBillFequencys.controller.js";
import { addNewBiller } from "../../controllers/biller/addNewBiller.controller.js";
import { uploadBillFile } from "../../controllers/biller/uploadBillFile.controller.js";
import { allSourceOfBill } from "../../controllers/biller/allSourceOfBill.controller.js";

router.route("/allcategory").get(getAllBillerCategory);

router.route("/allcurrencydetails").get(allCurrency);
router.route("/allcountrydetails").get(countryDetails);
router.route("/allbillfequencys").get(allBillFequencys);
router.route("/allsourceofbills").get(allSourceOfBill);
router.route("/addnewbiller").post(addNewBiller);
router.route("/uploadBill").post(uploadBillFile);

export default router;
