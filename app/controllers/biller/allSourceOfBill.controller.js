import { models } from "../../models/index.js";
const { source_of_bill } = models;

export const allSourceOfBill = async (req, res) => {
  try {
    const allSourceOfBill = await source_of_bill.findAll({
      attributes: ["source_of_bill_code", "source_of_bill_description"],
    });
    return res
      .status(200)
      .json({
        success: true,
        message: "all the sources of Bill",
        data: { allSourceOfBill },
      });
  } catch (error) {
    return res
      .status(404)
      .json({ success: true, message: "internal error", data: null });
  }
};
