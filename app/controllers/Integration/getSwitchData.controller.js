import { models } from "../../models/index.js";
const { switch_master } = models;

export const getAllSwitchData = async (req, res) => {
  try {
    const records = await switch_master.findAll();
    return res.status(200).json({
      success: true,
      data: records,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to fetch switch data",
    });
  }
};
