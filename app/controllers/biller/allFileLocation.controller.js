import { models } from "../../models/index.js";

const { folder_master } = models;

export const allFileLocation = async (req, res) => {
  try {
    const fileLocation = await folder_master.findAll({
      raw: true,
      attributes: ["location_of_file"],
    });
    return res.status(200).json({
      success: true,
      message: "all the file location",
      data: { fileLocation },
    });
  } catch (error) {
    return res
      .status(404)
      .json({ success: true, message: "internal error", data: null });
  }
};
