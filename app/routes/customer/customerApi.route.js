import express from "express";
import { generateQrforBill, getCustomerBills } from "../../controllers/customer/customerBills.controller.js";
import { customerSignIn } from "../../controllers/customer/customer.controller.js";
import { getBillersByCategory, saveCrefAndValidate } from "../../controllers/customer/selectBiller.controller.js";
const router = express.Router();
router.route("/onBoardCustomer").post(getCustomerBills);
router.route("/signInCustomer").get(customerSignIn);
router.route("/billerValidate").get(getBillersByCategory).post(saveCrefAndValidate);
router.post("/generateQR",generateQrforBill);



export default router;