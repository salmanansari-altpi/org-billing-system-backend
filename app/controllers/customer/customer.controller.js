import { where } from "sequelize";
import { models } from "../../models/index.js";
import jwt from "jsonwebtoken";
import { biller_category_master } from "../../models/biller_category_master.model.js";

const { customer } = models;

export const onBoardCustomer = async (req, res) => {
  try {
    const {
      appRefSrNo,
      email,
      password,
      mobileNo,
      firstName,
      lastName,
      registeredDate,
      suspendedDate,
    } = req.body;
    const finduser = await customer.findOne({where:{cust_email_id: email,
      cust_password: password,}})
    if(finduser){
      return res
      .status(400)
      .json({ success: false, message: "User already exist!" });
    }
    if (!email || !password || !firstName || !lastName || !mobileNo) {
      return res
        .status(400)
        .json({ success: true, message: "All Fields are Mandatory!" });
    }
    const date = new Date();
    const data = await customer.create({
      // app_ref_sr_no: appRefSrNo,
      cust_email_id: email,
      cust_password: password,
      cust_mobile_no: mobileNo,
      cust_last_name: lastName,
      cust_first_name: firstName,
      registered_date: date,
     
    });
    console.log(data);
    res
      .status(201)
      .json({ success: true, message: "User onboarded successfully!" });
  } catch (err) {
    console.log("Error while onBoarding Customer:- ", err);
    res.status(500).json({ success: true, message: "Something Went Wrong!" });
  }
};

export const categary = async(req,res)=>{
  try {
    const biller_category = await biller_category_master.findAll({
      attributes:['id','customer_type','description','notes']
    });
    
    if (biller_category) {
      return res.status(200).json({
        success: true,
        message: "all biller categorys",
        data: { biller_category },
      });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "internal error", data: null });
  }
}

export const customerSignIn = async (req, res) => {
  try {
    const { mobileNo, password } = req.body;
    console.log(req.body);
    if (!mobileNo || !password) {
      return res
        .status(400)
        .json({ success: true, message: "All fields are mandatory!" });
    }

    const userExist = await customer.findOne({
      where: { cust_mobile_no: mobileNo, cust_password: password },
    });
    if (!userExist) {
      return res
        .status(404)
        .json({ success: true, message: "Invalid mobile or password!" });
    }

    const token = jwt.sign({ id: mobileNo }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: true, message: "Something Went Wrong!" });
  }
};
