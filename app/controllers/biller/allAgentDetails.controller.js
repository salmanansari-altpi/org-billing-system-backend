import { models } from "../../models/index.js";
const { agent_biller_details } = models;

export const agentDetails = (req, res) => {
  try {
    const allagentdetails = agent_biller_details.findAll();
    return res
      .status(200)
      .json({
        success: true,
        message: "all Biller Agents Details",
        data: { allagentdetails },
      });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "internal error", data: null });
  }
};
