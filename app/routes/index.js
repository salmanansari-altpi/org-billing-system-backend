import express from "express";
const router = express.Router();


import  getBillerDetails  from "./Billers/getBillerDetails.route.js"
// Mount route files
router.use("/biller", getBillerDetails);

export default router;