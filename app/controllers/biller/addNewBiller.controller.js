import { connection } from "../../config/db.js";
import { models } from "../../models/index.js";
import fs from "fs";
import path from "path";

const {
  biller,
  biller_category_master,
  folder_master,
  country,
  source_of_bill,
  currency,
  bill_frequency,
  agent_details,
  billing_plan_type,
  biller_contact,
} = models;

export const addNewBiller = async (req, res) => {
  try {
    const {
      customer_type,
      currency_code,
      source_of_bill_code,
      billing_plan_type_code,
      frequency_code,
      agent_id,
      biller_name,
      address_1,
      city,
      state,
      pin,
      contact_name_1,
      mobile_no_1,
      email_1,
    } = req.body;

    let biller_code;
    const billerName = biller_name.slice(0, 4).toUpperCase();

    const billerInfo = await biller.findOne({
      raw: true,
      where: {
        biller_code: billerName,
      },
    });

    if (billerInfo) {
      const maxBillerId = await biller.max("biller_id");
      biller_code = billerName + (+maxBillerId + 1);
    } else {
      biller_code = billerName;
    }

    const dirPath = path.join("customer", biller_code);
    try {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log("Directory created successfully");
    } catch (err) {
      console.error("Error creating directory", err);
      return res.status(404).json({
        success: false,
        message: "error in creating file location",
      });
    }

    const billCategory = await biller_category_master.findOne({
      where: { customer_type },
    });
    const country_id = await country.findOne({
      where: { currency_code: currency_code },
    });
    // ------- add new biller
    const billPlan = await billing_plan_type.findOne({
      where: { billing_plan_type_code },
    });
    const sourceOfBill = await source_of_bill.findOne({
      where: { source_of_bill_code },
    });
    const amountType = await currency.findOne({ where: { currency_code } });
    const billFrequency = await bill_frequency.findOne({
      where: { frequency_code },
    });
    let agentId;
    if (agent_id) {
      agentId = await agent_details.findOne({ where: { agent_id } });
    }
    console.log(req.body);

    if (
      !billCategory ||
      !country_id ||
      !billPlan ||
      !sourceOfBill ||
      !amountType ||
      !billFrequency
    ) {
      return res.status(404).json({
        success: false,
        message: `Invalid  data`,
        data: {
          billCategory,
          country_id,
          billPlan,
          sourceOfBill,
          amountType,
          billFrequency,
        },
      });
    }
    // -------------------- create new table

    // Start transaction
    const t = await connection.transaction(); // Start a new transaction

    try {
      const billerInfo = await biller.create(
        {
          biller_code,
          biller_name,
          biller_category: billCategory.customer_type,
          country_id: country_id.country_id,
          source_of_bill_file: sourceOfBill.source_of_bill_code,
          bill_currency_id: amountType.bill_amount_id,
          bill_freq_id: billFrequency.bill_freq_id,
          agent_id: agentId?.agent_id || null,
          billing_plan_type_id: billPlan.billing_plan_type_id,
          bill_currency_id: country_id.country_id,
        },
        { Transaction: t }
      );

      await biller_contact.create(
        {
          biller_id: billerInfo.biller_id,
          address_1,
          city,
          state,
          pin,
          contact_name_1,
          mobile_no_1,
          email_1,
        },
        { Transaction: t }
      );

      await folder_master.create({
        location_of_file: dirPath,
      });

      res.status(200).json({
        success: true,
        message: "Biller added successfully",
        data: { billerInfo },
      });
    } catch (error) {
      // Rollback the transaction if any operation fails
      await t.rollback();
      console.warn("Transaction has been rolled back due to an error:", error.message);
      res.status(403).json({
        success: true,
        message: "Transaction has been rolled back due to an error",
        data: null,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(404)
      .json({ success: false, message: "internal error", data: null });
  }
};
