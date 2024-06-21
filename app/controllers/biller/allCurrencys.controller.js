import { models } from "../../models/index.js";
const { currency } = models;

export const allCurrency = async (req,res) => {
  try {
    const currencyDetails = await currency.findAll({
      attributes: ["currency_iD","currency_name", "currency_code"],
    });

    return res
      .status(200)
      .json({
        success: true,
        message: "all currency Details",
        data: { currencyDetails },
      });
  } catch (error) {
    return res
      .status(404)
      .json({ success: true, message: "internal error", data: null });
  }
};
