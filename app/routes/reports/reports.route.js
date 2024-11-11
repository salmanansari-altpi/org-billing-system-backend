import express from "express";
import { verifyOTPToken } from "../../middlewares/verifyOtp.middleware.js";
import {
  billPaid,
  totalBiller,
  unboardedBiller,
} from "../../controllers/reports/reports.controller.js";
const router = express.Router();

router.get("/biller", verifyOTPToken, totalBiller);
router.get("/pending-biller", verifyOTPToken, unboardedBiller);
router.get("/bill-paid", verifyOTPToken, billPaid);

export default router;
