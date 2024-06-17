import { where } from "sequelize";
import { models } from "../../models/index.js";
// import { raw } from "body-parser";

const { customer_biller_cref, biller, biller_bills } = models;

export const getCustomerBills = async (req, res) => {
  try {
    const { id } = req.user;
    const custBills = await customer_biller_cref.findAll({
      raw: true,
      customer_id: id,
    });

    if (!custBills) {
      return res
        .status(404)
        .json({ success: false, message: "No bills found!" });
    }

    const billers = custBills.map(async (cust) => {
      let billerData = [],
        billsData = [];
      billerData.push(
        await biller.findAll({
          raw: true,
          attributes: ["biller_name", "biller_category"],
          where: { biller_id: cust.cust_biller_id },
        })
      );

      billsData.push(
        await biller_bills.findAll({
          raw: true,
          attributes: [
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
          where: {
            biller_customer_account_no: cust.biller_customer_account_no,
          },
        })
      );

      return [...billerData, ...billsData];
    });

    await Promise.all(biller);
    res.status(200).json({ success: true, data: billers });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
};
