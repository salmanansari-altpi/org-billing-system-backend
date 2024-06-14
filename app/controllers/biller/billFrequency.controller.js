import { models } from "../../models/index.js";

const { biller_frequency } = models;

export const getBillFrequency = async (req, res) => {
  try {
    // Finding the bill frequency based on the frequency code
    const billFrequency = await biller_frequency.findAll({
      attributes: ["frequency_code", "frequency_description"],
    });
    // console.log(billFrequency);
    return res
    .status(200)
    .json({
      success: true,
      message: "all Biller Agents Details",
      data: { billFrequency },
    });

    // return res.status(200).json({ data: { billFrequency } });
  } catch (error) {
    return res
    .status(404)
    .json({ success: false, message: "internal error", data: null });
  }
};


