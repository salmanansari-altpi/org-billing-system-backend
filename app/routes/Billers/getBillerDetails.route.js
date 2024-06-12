import express from "express";
const router = express.Router();

import { getBillerDetails } from "../../controllers/biller_details.controller.js";





router.route('/getBillerDetails').post(getBillerDetails);

export default router;