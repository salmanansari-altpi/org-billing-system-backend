import { models } from "../../models/index.js";
const { biller_cycle_details, biller } = models;

export const generateBillerCycle = async (req, res) => {
  try {
    const { biller_code } = req.query;
    const { biller_cycle_no, biller_cycle_day } = req.body;
    const { biller_id } = await biller.findOne({
      raw: true,
      attributes: ["biller_id"],
      where: { biller_code: biller_code },
    });
    console.log(biller_id);
    if (!biller_cycle_no || !biller_cycle_day) {
      return res
        .status(404)
        .json({ success: false, message: "All Field are mandatory" });
    }

    const biller_id_exists = await biller_cycle_details.findOne({
      where: { biller_id: biller_id },
    });
    if (biller_id_exists) {
      return res.status(404).json({ success: false, message: "biller exists" });
    }
    await biller_cycle_details.create({
      biller_id: biller_id,
      biller_cycle_no: biller_cycle_no,
      biller_cycle_day: biller_cycle_day,
    });
    return res
      .status(201)
      .json({ success: true, message: "Biller Generate Successfully" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
