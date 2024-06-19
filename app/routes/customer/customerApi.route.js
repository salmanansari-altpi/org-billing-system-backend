import express from "express";
import { generateQrforBill, getCustomerBills } from "../../controllers/customer/customerBills.controller.js";
import { categary, customerSignIn, onBoardCustomer } from "../../controllers/customer/customer.controller.js";
import { getBillersByCategory, saveCrefAndValidate } from "../../controllers/customer/selectBiller.controller.js";
const router = express.Router();
router.route("/onBoardCustomer").post(onBoardCustomer);
router.route("/getCatagery").get(categary);
router.route("/getbills").get(getCustomerBills);
router.route("/signInCustomer").post(customerSignIn);
router.route("/billerValidate").get(getBillersByCategory).post(saveCrefAndValidate);
router.route("/generateQR").post(generateQrforBill);



export default router;