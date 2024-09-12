import { models } from "../../models/index.js";

const { pay_authority } = models;

export const readPayAuthority = async (req, res) => {
  try {
    const records = await pay_authority.findAll({
      raw: true,
      attributes: { exclude: ["payAuthority_id"] },
    });
    res.status(200).json({
      success: true,
      data: records,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "" });
  }
};
