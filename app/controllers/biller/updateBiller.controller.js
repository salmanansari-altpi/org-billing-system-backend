import { models } from "../../models/index.js";

const { biller } = models;

export const updateTechnicalInfo = async (req, res) => {
  try {
    const { biller_code, location_of_file, source_of_bill_code } = req.body;
    if (!biller_code || !location_of_file || !source_of_bill_code) {
      return res.status(402).json({
        success: false,
        message: "All Field are mandatory",
        data: null,
      });
    }
    await biller.update(
      {
        location_of_bill_file: location_of_file,
        source_of_bill_file: source_of_bill_code,
      },
      {
        where: {
          biller_code,
        },
      }
    );

    return res.status(201).json({
      success: true,
      message: "Change the biller Technical Information",
      data: null,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ success: false, message: "internal error", data: null });
  }
};
