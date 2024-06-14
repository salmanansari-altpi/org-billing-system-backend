import express from "express";
const router = express.Router();

import getBillerDetails from "./Billers/getBillerDetails.route.js";
import agentApi from "./agents/agentsApi.route.js";
// Mount route files
router.use("/biller", getBillerDetails);
router.use("/agent", agentApi);

export default router;
