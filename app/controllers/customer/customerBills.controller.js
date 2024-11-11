import { where } from "sequelize";
import { models } from "../../models/index.js";
import { raw } from "mysql2";
import { generateUniqueString } from "../../utils/uniqueString.js";
// import { raw } from "body-parser";

const {
  customer,
  customer_biller_cref,
  biller,
  biller_bills,
  currency,
  consumer_request,
} = models;

export const getCustomerBills = async (req, res) => {
  try {
    const { id } = req.user;
    const customers = await customer.findOne({ where: { cust_mobile_no: id } });

    if (!customers) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not found!" });
    }

    const custBills = await customer_biller_cref.findAll({
      raw: true,
      where: { customer_id: customers.customer_id },
    });

    if (!custBills.length) {
      return res
        .status(200)
        .json({ success: false, message: "No bills found!", data: [] });
    }

    let billerData = [];
    for (const cust of custBills) {
      console.log(cust, "******************");

      const billerInfo = await biller.findOne({
        raw: true,
        attributes: [
          "biller_code",
          "biller_name",
          "biller_category",
          "bill_currency_id",
        ],
        where: { biller_id: cust.biller_id },
      });

      const currencyInfo = await currency.findOne({
        raw: true,
        attributes: ["currency_icon"],
        where: { currency_iD: billerInfo.bill_currency_id },
      });

      console.log("-----------------", currencyInfo);

      const billerBills = await biller_bills.findAll({
        raw: true,
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
        where: { biller_customer_account_no: cust.biller_customer_account_no },
      });

      if (billerInfo && billerBills.length) {
        billerData.push({
          billerInfo,
          bills: billerBills,
          currency: currencyInfo,
        });
      }
    }

    res.status(200).json({ success: true, data: billerData });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

export const generateQrforBill = async (req, res) => {
  try {
    const { id } = req.user;
    const { biller_code, biller_customer_account_no, biller_bill_no } =
      req.body;
    const txnCode = generateUniqueString(biller_code);

    if (!biller_code || !biller_customer_account_no) {
      return res
        .status(500)
        .json({ success: false, message: "Something Went Wrong!" });
    }

    const findBiller_customer = await customer.findOne({
      where: { cust_mobile_no: id },
    });
    const findBiller = await biller.findOne({
      raw: true,
      where: { biller_code: biller_code },
    });
    if (!findBiller_customer || !findBiller) {
      return res
        .status(500)
        .json({ success: false, message: "Something Went Wrong!" });
    }
    const { biller_bill_amount, transaction_code } = await biller_bills.findOne(
      {
        raw: true,
        where: {
          biller_id: findBiller.biller_id,
          biller_customer_account_no: biller_customer_account_no,
        },
        attributes: ["biller_bill_amount", "transaction_code"],
      }
    );

    await consumer_request.create({
      txn_unique_number: txnCode,
      amount: biller_bill_amount,
      valid_upto: 1,
      biller_code: biller_code,
      consumer_number: biller_customer_account_no,
    });

    const intent = `upi://pay?tr=${txnCode}&tid=&pa=&mc=1234&pn=${findBiller.biller_name}&am=${biller_bill_amount}&cu=&tn=Pay%20for%20merchant`;
    // biller id
    return res.status(200).json({
      success: true,
      data: intent,
      txnId: txnCode,
    });
    // generate QR code ---------- here
  } catch (err) {
    console.log("Error when generating QR Code:- ", err);
    res.status(500).json({ success: false, message: err });
  }
};
