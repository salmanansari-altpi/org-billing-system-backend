import { where } from "sequelize";
import { biller } from "../../models/biller.model.js";
import { biller_bills } from "../../models/Biller_Bills.model.js";
import { customer_biller_cref } from "../../models/customer_biller_cref.model.js";
import { customer } from "../../models/customer.model.js";

export const getBillersByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    console.log(category, "...........");
    const billers = await biller.findAll({
      where: { biller_category: category },
      attributes: ["biller_name", "biller_code"],
    });
    return res.json({ success: true, data: billers });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something Went Wrong!" });
  }
};

export const saveCrefAndValidate = async (req, res) => {
  try {
    const { id } = req.user;
    const { biller_code, biller_customer_account_no } = req.body;
    if (!biller_code || !biller_customer_account_no) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory!" });
    }
    const findBiller_customer = await customer.findOne({
      raw: true,
      where: { cust_mobile_no: id },
    });
    console.log(findBiller_customer, "fsjskudhoh");
    const findBiller = await biller.findOne({
      where: { biller_code: biller_code },
    });
    console.log(findBiller);
    if (!findBiller_customer || !findBiller) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Account Number!" });
    }
    // find biller_customer_account_no in biller bills
    const findBiler_bills = await biller_bills.findOne({
      where: {
        biller_code: biller_code,
        biller_customer_account_no: biller_customer_account_no,
      },
      // order: [["createdAt", "DESC"]],
      attributes: [
        "biller_code",
        "biller_customer_account_no",
        "biller_bill_no",
        "biller_bill_date",
        "biller_bill_amount",
        "biller_other_charges",
        "biller_taxes",
        "biller_pending_due",
        "biller_total_amount_due",
        "last_meter_reading",
        "current_meter_reading",
        "units_consumed",
        "reading_date",
      ],
    });
    console.log(findBiler_bills, "fsjskudhoh");
    if (!findBiler_bills) {
      res
        .status(500)
        .json({ success: false, message: "Customer Account No Went Wrong!" });
    }
    // save as cross ref
    const finduserref = await customer_biller_cref.findOne({
      where: {
        customer_id: findBiller_customer.customer_id,
        biller_id: findBiller.biller_id,
        biller_customer_account_no: biller_customer_account_no,
      },
    });
    if (!finduserref) {
      await customer_biller_cref.create({
        customer_id: findBiller_customer.customer_id,
        biller_id: findBiller.biller_id,
        biller_customer_account_no: biller_customer_account_no,
      });
    }
    return res.json({ success: true, data: findBiler_bills });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
