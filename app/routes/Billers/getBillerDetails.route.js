import express from "express";
const router = express.Router();

//! please refer this syntax for importing any model 
import { models } from "../../models/index.js";

const { biller } = models; 

router.route("/getBillerDetails").post(biller);
router.route("/getAllCategories").get(biller);

export default router;
