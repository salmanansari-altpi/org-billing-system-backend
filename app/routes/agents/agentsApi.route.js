import express from "express";
const router = express.Router();

import {
  allAgentDetails,
  createAgent,
} from "../../controllers/agent/allAgentDetails.controller.js";

router.route("/allagentdetail").get(allAgentDetails);

router.route("/createAgent").post(createAgent);

export default router;
