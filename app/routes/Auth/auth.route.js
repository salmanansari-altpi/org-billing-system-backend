import express from "express";
import {
  generateOTP,
  signin,
  verifyOTP,
} from "../../controllers/auth/auth.controller.js";
import { verifyOTPToken } from "../../middlewares/verifyOtp.middleware.js";

const router = express.Router();

router.post("/generate-otp", generateOTP);
router.post("/verify-otp", verifyOTPToken, verifyOTP);

router.post("/sign-in",signin)
export default router;
