import { models } from "../../models/index.js";
const { biller_frequency } = models;

export const allBillFequencys = async (req, res) => {
  try {
    const billFequencys = await biller_frequency.findAll({
      attributes: ["frequency_code", "frequency_description"],
    });
    return res.status(200).json({
      success: true,
      message: "all Biller bill fequrency Details",
      data: { billFequencys },
    });
  } catch (error) {
    return res
      .status(404)
      .json({ success: true, message: "internal error", data: null });
  }
};
