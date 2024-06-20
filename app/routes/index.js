import express from "express";
const router = express.Router();

// import uploadBillFile from "./Billers/getBillerDetails.route.js";
import agentApi from "./agents/agentsApi.route.js";
import authRoute from "./Auth/auth.route.js";
import addNewBiller from "./Billers/getBillerDetails.route.js";
import customerApi from "./customer/customerApi.route.js";
import integrations from "./Integration/integration.route.js";

router.use("/agent", agentApi);
router.use("/auth", authRoute);
router.use("/biller", addNewBiller);
router.use("/customer", customerApi);
router.use("/integration", integrations);

export default router;
