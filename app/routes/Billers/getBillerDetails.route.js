import express from "express";
const router = express.Router();

import { getBillerDetails } from "../../controllers/biller_details.controller.js";





router.route('/getBillerDetails').get(getBillerDetails);

export default router;