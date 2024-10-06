import { biller } from "../../models/biller.model.js";

export const totalBiller = async (req, res) => {
  try {
    const totalBiller = await biller.count({});
    res.status(200).json({ success: true, data: totalBiller });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
