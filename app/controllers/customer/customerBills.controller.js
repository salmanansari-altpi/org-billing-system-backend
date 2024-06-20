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
        .json({ success: true, message: "No bills found!" });
    }

    let billerData = [];
      // billsData = [];
    const billers = custBills.map(async (cust) => {
      billerData.push(
        await biller.findAll({
          raw: true,
          attributes: ["biller_code","biller_name", "biller_category"],
          where: { biller_id: cust.biller_id },
        }),
        await biller_bills.findAll({
          raw: true,
          attributes: [
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
          where: {
            biller_customer_account_no: cust.biller_customer_account_no,
          },
        })
      );

      

      return [...billerData];
    });

    await Promise.all(biller);
    res.status(200).json({ success: true, data: billers });
  } catch (err) {
    res.status(500).json({ success: true, message: "Something Went Wrong!" });
  }
};

export const generateQrforBill = async(req, res)=>{
  const { id } = req.user;
  const{biller_code,biller_customer_account_no,biller_bill_no} = req.body;
  if(!id || biller_code || biller_customer_account_no){
    return res.status(500).json({ success: true, message: "Something Went Wrong!" });
}

const findBiller_customer = await customer.findOne({where:{customer_id:id}});
   const findBiller = await biller.findOne({where:{biller_code:biller_code}})
    if(!findBiller_customer || !findBiller){
        return res.status(500).json({ success: true, message: "Something Went Wrong!" });
    }
    const findamount = await biller_bills.findOne({
      where:{
        biller_id:findBiller.biller_id,
        biller_customer_account_no:biller_customer_account_no
      },
      attributes:["biller_bill_amount"]
    })

  const intent =  `upi://pay?tr=&tid=&pa=&mc=1234&pn=${findBiller.biller_name}&am=${findamount}&cu=&tn=Pay%20for%20merchant`;
    // biller id 
    return res.status(200).json({
      success :true,
      data:intent

    })
// generate QR code ---------- here 

}
