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
export const createPayAuthority = async (req, res) => {
  try {
    const {
      payAuthority_code,
      payAuthority_name,
      payAuthority_note, //1 - Live | 2 - Suspended | 3 - Test |8 - Boarded|9 - Deleted
      payAuthority_status,
    } = req.body;
    const records = await pay_authority.create({
      payAuthority_code,
      payAuthority_description: payAuthority_name,
      payAuthority_note, //1 - Live | 2 - Suspended | 3 - Test |8 - Boarded|9 - Deleted
      payAuthority_status,
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
