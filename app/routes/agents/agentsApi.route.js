import express from "express";
const router = express.Router();

import { allAgentDetails } from "../../controllers/agent/allAgentDetails.controller.js";

router.route("/allagentdetail").get(allAgentDetails);

export default router;
