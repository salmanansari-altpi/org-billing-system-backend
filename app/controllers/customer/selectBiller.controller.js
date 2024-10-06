import { where } from "sequelize";
import { biller } from "../../models/biller.model.js";
import { biller_bills } from "../../models/biller_bills.model.js";
import { customer_biller_cref } from "../../models/customer_biller_cref.model.js";
import { customer } from "../../models/customer.model.js";
import { raw } from "mysql2";

export const getBillersByCategory = async (req, res) => {
  try {
    const { category } = req.query;
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
      raw: true,
      where: {
        biller_code: biller_code,
        biller_customer_account_no: biller_customer_account_no,
      },
      order: [["createdAt", "DESC"]],
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
        "transaction_code",
        "last_meter_reading",
        "current_meter_reading",
        "units_consumed",
        "reading_date",
      ],
    });
    const findBiler_bills_id = await biller_bills.findOne({
      raw: true,
      where: {
        biller_code: biller_code,
        biller_customer_account_no: biller_customer_account_no,
      },
      order: [["createdAt", "DESC"]],
      attributes: ["biller_id"],
    });
    console.log(findBiler_bills, "fsjskudhoh");
    const biller_name = await biller.findOne({
      raw: true,
      attributes: ["biller_name"],
      where: { biller_id: findBiler_bills_id.biller_id },
    });
    if (!findBiler_bills) {
      return res.status(200).json({
        success: false,
        code: 200,
        message: "Customer Account No. Does Not Exist! Please Check. ",
      });
    }
    // save as cross ref
    const finduserref = await customer_biller_cref.findOne({
      where: {
        customer_id: findBiller_customer.customer_id,
        biller_id: findBiler_bills_id.biller_id,
        biller_customer_account_no: biller_customer_account_no,
      },
    });
    console.log(
      finduserref,
      "",
      findBiller_customer.customer_id,
      findBiller.biller_id,
      biller_customer_account_no
    );
    if (!finduserref) {
      await customer_biller_cref.create({
        customer_id: findBiller_customer.customer_id,
        biller_id: findBiller.biller_id,
        biller_customer_account_no: biller_customer_account_no,
      });
    }
    //  await delete findBiler_bills.biller_id;
    const data = { ...findBiler_bills, biller_name: biller_name.biller_name };
    console.log(data, "***********************");

    return res.json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
export const payAndValidate = async (req, res) => {
  try {
    const { id } = req.user;

    const { biller_code, biller_customer_account_no } = req.body;
    console.log(biller_code, biller_customer_account_no);

    if (!biller_code || !biller_customer_account_no) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory!" });
    }
    const findBiller_customer = await customer.findOne({
      raw: true,
      where: { cust_mobile_no: id },
    });
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
      raw: true,
      where: {
        biller_code: biller_code,
        biller_customer_account_no: biller_customer_account_no,
      },
      order: [["createdAt", "DESC"]],
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
        "transaction_code",
        "last_meter_reading",
        "current_meter_reading",
        "units_consumed",
        "reading_date",
      ],
    });
    const findBiler_bills_id = await biller_bills.findOne({
      raw: true,
      where: {
        biller_code: biller_code,
        biller_customer_account_no: biller_customer_account_no,
      },
      order: [["createdAt", "DESC"]],
      attributes: ["biller_id"],
    });
    const biller_name = await biller.findOne({
      raw: true,
      attributes: ["biller_name"],
      where: { biller_id: findBiler_bills_id.biller_id },
    });
    if (!findBiler_bills) {
      return res.status(200).json({
        success: false,
        code: 200,
        message: "Customer Account No. Does Not Exist! Please Check.",
      });
    }
    // save as cross ref
    const finduserref = await customer_biller_cref.findOne({
      where: {
        customer_id: findBiller_customer.customer_id,
        biller_id: findBiler_bills_id.biller_id,
        biller_customer_account_no: biller_customer_account_no,
      },
    });
    console.log(
      finduserref,
      "",
      findBiller_customer.customer_id,
      findBiller.biller_id,
      biller_customer_account_no
    );
    // if (!finduserref) {
    //   await customer_biller_cref.create({
    //     customer_id: findBiller_customer.customer_id,
    //     biller_id: findBiller.biller_id,
    //     biller_customer_account_no: biller_customer_account_no,
    //   });
    // }
    //  await delete findBiler_bills.biller_id;
    const data = { ...findBiler_bills, biller_name: biller_name.biller_name };
    console.log(data);

    return res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
