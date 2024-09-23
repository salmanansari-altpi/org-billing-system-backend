import express from "express";
import {
  generateQrforBill,
  getCustomerBills,
} from "../../controllers/customer/customerBills.controller.js";
import {
  categary,
  customerSignIn,
  onBoardCustomer,
} from "../../controllers/customer/customer.controller.js";
import {
  getBillersByCategory,
  payAndValidate,
  saveCrefAndValidate,
} from "../../controllers/customer/selectBiller.controller.js";
import { verifyOTPToken } from "../../middlewares/verifyOtp.middleware.js";
const router = express.Router();

router.route("/onBoardCustomer").post(verifyOTPToken, onBoardCustomer);
router.route("/getCatagery").get(categary);
router.route("/getbills").get(verifyOTPToken, getCustomerBills);
router.route("/signInCustomer").post(customerSignIn);
router
  .route("/billerValidate")
  .get(getBillersByCategory)
  .post(verifyOTPToken, saveCrefAndValidate);
router.route("/billerValidatePay").post(verifyOTPToken, payAndValidate);
router.route("/generateQR").post(verifyOTPToken, generateQrforBill);

export default router;
