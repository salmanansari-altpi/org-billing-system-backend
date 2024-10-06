import express from "express";
import { verifyOTPToken } from "../../middlewares/verifyOtp.middleware.js";
import { totalBiller } from "../../controllers/reports/reports.controller.js";
const router = express.Router();

router.get("/biller", totalBiller);

export default router;
