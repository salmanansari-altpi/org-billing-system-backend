import { models } from "../../models/index.js";
const { partner_bank } = models;

export const getAllpartnerBanks = async (req, res) => {

    try {
        const records = await partner_bank.findAll();
        return res.status(200).json({
            success: true,
            message: records
        })
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: "Unable to fetch partnerBank data"
        })
}};