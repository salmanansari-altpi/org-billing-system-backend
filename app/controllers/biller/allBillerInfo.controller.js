import { models } from "../../models/index.js";

const { biller } = models;

export const allBillerInfo = async (req, res) => {
  try {
    //! finding all biller information
    const allBiller = await biller.findAll({
      raw: true,
      attributes: [
        "biller_code",
        "biller_status",
        "biller_name",
        "biller_category",
      ],
    });
    return res.status(200).json({
      success: true,
      data: {
        allBiller,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
