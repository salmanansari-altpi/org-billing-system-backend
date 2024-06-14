import express from "express";
const router = express.Router();

import getBillerDetails from "./Billers/getBillerDetails.route.js";
import agentApi from "./agents/agentsApi.route.js";
import authRoute from "./Auth/auth.route.js";

// Mount route files
router.use("/biller", getBillerDetails);
router.use("/agent", agentApi);
router.use("/auth", authRoute);

export default router;
