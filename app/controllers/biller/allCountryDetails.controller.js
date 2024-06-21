import { models } from "../../models/index.js";
const { country } = models;

export const countryDetails = async (req, res) => {
  try {
    const countryDetails = await country.findAll({
      attributes: ["country_id","country_name", "currency_code"],
    });

    return res.status(200).json({
      success: true,
      message: "all Country Details",
      data: { countryDetails },
    });
  } catch (error) {
    return res
      .status(404)
      .json({ success: true, message: "internal error", data: null });
  }
};
