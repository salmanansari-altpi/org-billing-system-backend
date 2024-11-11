import express from "express";
import {
  apiBasedBillers,
  consumerRequest,
  externalLinkQR,
} from "../../controllers/consumer/consumerRequest.controller.js";
const router = express.Router();

router.post("/api-billers", apiBasedBillers);
router.post("/bill-pay", consumerRequest);
router.post("/external", externalLinkQR);

export default router;
