import { models } from "../../models/index.js";
const { agent_details } = models;

export const allAgentDetails = (req, res) => {
  try {
    const agentDetails = agent_details.findAll({
      attributes: ["agent_id", "agent_name", "agent_type"],
    });
    return res
      .status(200)
      .json({ success: true, message: "all Agents", data: { agentDetails } });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "internal error", data: null });
  }
};
