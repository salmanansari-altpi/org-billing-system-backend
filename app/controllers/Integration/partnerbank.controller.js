import { models } from "../../models/index.js";
const { partner_bank } = models;

export const partnerBank = async (req, res) => {
  try {
    const {
      // Partner_Bank_Id,
      partner_bank_code,
      partner_bank_name,
      partner_bank_status, //1 - Live | 2 - Suspended | 3 - Test |8 - Boarded|9 - Deleted
      partner_bank_note,
    } = req.body;

    await partner_bank.create({
        partner_bank_code: partner_bank_code,
        partner_bank_name: partner_bank_name,
        partner_bank_status: partner_bank_status, //1 - Live | 2 - Suspended | 3 - Test |8 - Boarded|9 - Deleted
        partner_bank_note: partner_bank_note,
    });


    return res.status(200).json({
      success: true,
      message: 'partner_bank_details created successfully',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to create records",
    });
  }
};
