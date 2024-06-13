import { models } from "../../models/index.js";
const { biller_frequency } = models;

export const allBillFequencys = (req, res) => {
  try {
    const billFequencys = biller_frequency.findAll({
      attributes: ["bill_freq_id", "frequency_code", "frequency_description"],
    });
    return res.status(200).json({
      success: true,
      message: "all Biller bill fequrency Details",
      data: { billFequencys },
    });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "internal error", data: null });
  }
};
