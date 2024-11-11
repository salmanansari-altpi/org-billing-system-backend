import express from "express";
const router = express.Router();

// import uploadBillFile from "./Billers/getBillerDetails.route.js";
import agentApi from "./agents/agentsApi.route.js";
import authRoute from "./Auth/auth.route.js";
import addNewBiller from "./Billers/getBillerDetails.route.js";
import customerApi from "./customer/customerApi.route.js";
import integration from "./Integrations/integration.route.js";
import reportRoute from "./reports/reports.route.js";
import consumerRoute from "./consumer/consumer.route.js";

// router.use("/billFile", uploadBillFile);
router.use("/agent", agentApi);
router.use("/auth", authRoute);
router.use("/biller", addNewBiller);
router.use("/customer", customerApi);
router.use("/integration", integration);
router.use("/reports", reportRoute);
router.use("/consumer", consumerRoute);

export default router;
