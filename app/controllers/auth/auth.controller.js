import jwt from "jsonwebtoken";
import { models } from "../../models/index.js";

import { otps } from "../../../index.js";
import { where } from "sequelize";
const { customer } = models;

export const generateOTP = async (req, res) => {
  try {
    const { mobileNo } = req.body;
    if (!mobileNo) {
      return res
        .status(400)
        .json({ success: false, message: "Enter the Mobile No!" });
    }
    const otp = Math.floor(1000 + Math.random() * 9000);
    const otpExistIndex = otps.findIndex((data) => data.mobileNo === mobileNo);
    if (otpExistIndex === -1) {
      otps.push({ otp, mobileNo, time: new Date() });
    } else {
      otps.splice(otpExistIndex, 1, { otp, mobileNo, time: new Date() });
    }
    console.log(otps);
    const token = jwt.sign({ mobileNo }, process.env.JWT_SECRET, {
      expiresIn: "5m",
    });
    res.status(201).json({
      success: true,
      message: `You have received the OTP:- ${otp}`,
      token,
    });
  } catch (err) {
    console.log("Error while generating OTP:-", err);
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    const { mobileNo } = req.user;

    const verify = otps.find((data) => data.mobileNo === mobileNo);
    const now = new Date();
    const threshold = new Date(now.getMinutes() - 5 * 60 * 1000);
    if (verify.time <= threshold) {
      return res.status(400).json({ success: false, message: "OTP Expired!" });
    }
    if (verify.otp != otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    otps = otps.filter((data) => data.mobileNo !== mobileNo);
    res.status(201).json({ success: true, message: "Valid OTP" });
  } catch (err) {
    console.log("Error while generating OTP:-", err);
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
};

export const signup = async (req, res) => {
  try {
    const { mobileNo } = req.user;
    const { fName, lName, password, repassword } = req.body;

    if (!fName || !lName || !password || !repassword) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory!" });
    }

    const userExist = await customer.findOne({
      where: { mobileNo: mobileNo, password: password },
    });

    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists!" });
    }

    if (password !== repassword) {
      return res.status(400).json({
        success: false,
        message: "Both the passwords should be same!",
      });
    }
  } catch (err) {
    console.log("Error while signing up:- ", err);
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
};

// export const signin = async (req, res) => {
//   try {
//     const { mobileNo, password } = req.body;
//     if (!mobileNo || !password) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are mandatory!" });
//     }

//     const userExist = await customer.findOne({
//       where: { mobileNo: mobileNo, password: password },
//     });
//     if (!userExist) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Invalid mobile or password!" });
//     }

//     const token = jwt.sign({ mobileNo }, process.env.JWT_SECRET, {
//       expiresIn: "10d",
//     });
//     res.status(200).json({ success: true, token });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Something Went Wrong!" });
//   }
// };
