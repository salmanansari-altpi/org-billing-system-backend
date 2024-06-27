import { where } from "sequelize";
import { models } from "../../models/index.js";
const { agent_details } = models;

export const allAgentDetails = async (req, res) => {
  try {
    const agentDetails = await agent_details.findAll({
      attributes: ["agent_id", "agent_name", "agent_type"],
    });
    return res
      .status(200)
      .json({ success: true, message: "all Agents", data: { agentDetails } });
  } catch (error) {
    return res
      .status(404)
      .json({ success: true, message: "internal error", data: null });
  }
};

export const createAgent = async (req, res) => {
  try {
    const {
      agent_name,
      agent_type,
      address_1,
      address_2,
      city,
      state,
      zip,
      title,
      first_name,
      last_name,
      mobile_no,
      email_id,
      bank_name,
      bank_routing_no,
      account_name,
      account_no,
      password,
    } = req.body;

    const mobileNoExists = await agent_details.findOne({
      where: { mobile_no: mobile_no },
    });

    if (mobileNoExists) {
      return res
        .status(404)
        .json({ success: false, message: "Mobile Number Already Exists" });
    }
    await agent_details.create({
      agent_name: agent_name,
      agent_type: agent_type,
      address_1: address_1,
      address_2: address_2,
      city: city,
      state: state,
      zip: zip,
      title: title,
      first_name: first_name,
      last_name: last_name,
      mobile_no: mobile_no,
      email_id: email_id,
      bank_name: bank_name,
      bank_routing_no: bank_routing_no,
      account_name: account_name,
      account_no: account_no,
      password: password,
    });
    return res
      .status(201)
      .json({ success: true, message: "Agent Created Successfully" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
