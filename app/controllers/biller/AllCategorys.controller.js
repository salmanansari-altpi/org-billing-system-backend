import { models } from "../../models/index.js";
const { biller_category_master } = models;

export const getAllBillerCategory = async  (req, res) => {
  try {
    const biller_category = await biller_category_master.findAll({
      attributes:['id','customer_type','description','notes']
    });
    
    if (biller_category) {
      return res.status(200).json({
        success: true,
        message: "all biller categorys",
        data: { biller_category },
      });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "internal error", data: null });
  }
};
