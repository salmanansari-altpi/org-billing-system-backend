import { where } from "sequelize";
import { models } from "../../models/index.js";

const { biller } = models;

export const fileFormat = async (req, res) => {
  try {
    const { biller_code } = req.query;
    const { source_of_bill_file } = await biller.findOne({
      raw: true,
      attributes: ["source_of_bill_file"],
      where: { biller_code },
    });
    res.status(200).json({ success: true, data: source_of_bill_file });
  } catch (err) {
    console.log("Error while checking format:- ", err);
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
};
