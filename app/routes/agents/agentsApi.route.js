import express from "express";
const router = express.Router();

import { agentDetails } from "../../controllers/biller/allAgentDetails.controller.js";

router.route("/allagentdetails").get(agentDetails);

export default router;
