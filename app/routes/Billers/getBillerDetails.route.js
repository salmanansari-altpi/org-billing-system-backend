import express from "express";
import { getBillFrequencyPerDay, getBillFrequencyPerMontly, getBillFrequencyPerWeek, getBillFrequencyPerYearly } from "../../controllers/billFrequency.controller.js";
const router = express.Router();


router.route("/getBillFrequencyPerDay").get(getBillFrequencyPerDay);
router.route("/getBillFrequencyPerWeek").get(getBillFrequencyPerWeek);
router.route("/getBillFrequencyPerMontly ").get(getBillFrequencyPerMontly);
router.route("/getBillFrequencyPerYearly").get(getBillFrequencyPerYearly);

export default router;
