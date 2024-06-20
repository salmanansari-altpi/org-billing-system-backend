import { models } from "../../models/index.js";
const { billing_plan_type } = models;

export const billerPlanType = async (req, res) => {
  try {
    const billerPlanType = await billing_plan_type.findAll({
      attributes: ["billing_plan_type_code", "billing_plan_type_description"],
    });
    return res.status(200).json({ sucess: true, data: { billerPlanType } });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "internal error", data: null });
  }
};
