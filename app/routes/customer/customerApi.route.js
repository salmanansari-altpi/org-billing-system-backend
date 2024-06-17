import express from "express";
import { getCustomerBills } from "../../controllers/customer/customerBills.controller.js";
import { customerSignIn } from "../../controllers/customer/customer.controller.js";
const router = express.Router();
router.route("/onBoardCustomer").post(getCustomerBills);
router.route("/signInCustomer").get(customerSignIn)



export default router;