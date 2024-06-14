import { models } from "../../models/index.js";

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
    if (!email || !password || !firstName || !lastName || !mobileNo) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields are Mandatory!" });
    }
    const data = await customer.create({
      app_ref_sr_no: appRefSrNo,
      cust_email_id: email,
      cust_password: password,
      cust_mobile_no: mobileNo,
      cust_last_name: lastName,
      cust_first_name: firstName,
      registered_date: registeredDate,
      suspended_date: suspendedDate,
    });
    console.log(data);
    res
      .status(201)
      .json({ success: true, message: "User onboarded successfully!" });
  } catch (err) {
    console.log("Error while onBoarding Customer:- ", err);
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
};

export const customerSignIn = async (req, res) => {
  try {
    const { mobileNo, password } = req.body;
    if (!mobileNo || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory!" });
    }

    const userExist = await customer.findOne({
      where: { mobileNo: mobileNo, password: password },
    });
    if (!userExist) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid mobile or password!" });
    }

    const token = jwt.sign({ mobileNo }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
};
