import { models } from "../../models/index.js";
const { currency } = models;

export const allCurrency = (req,res) => {
  try {
    const currencyDetails = currency.findAll({
      attributes: ["currency_name", "currency_code"],
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
      .json({ success: false, message: "internal error", data: null });
  }
};
