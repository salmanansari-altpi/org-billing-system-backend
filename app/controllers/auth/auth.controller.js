import jwt from "jsonwebtoken";
import { models } from "../../models/index.js";

import { otps, veriedMobileNos } from "../../../index.js";
const { customer, dashboard_menus, menu_elements } = models;

export const generateOTP = async (req, res) => {
  try {
    const { mobileNo } = req.body;
    if (!mobileNo) {
      return res
        .status(400)
        .json({ success: true, message: "Enter the Mobile No!" });
    }
    const otp = Math.floor(1000 + Math.random() * 9000);
    const otpExistIndex = otps.findIndex((data) => data.mobileNo === mobileNo);
    if (otpExistIndex === -1) {
      otps.push({ otp, mobileNo, time: new Date() });
    } else {
      otps.splice(otpExistIndex, 1, { otp, mobileNo, time: new Date() });
    }
    const token = jwt.sign({ id: mobileNo }, process.env.JWT_SECRET, {
      expiresIn: "5m",
    });
    res.status(201).json({
      success: true,
      message: `You have received the OTP:- ${otp}`,
      token,
    });
  } catch (err) {
    console.log("Error while generating OTP:-", err);
    res.status(500).json({ success: true, message: "Something Went Wrong!" });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    let { id: mobileNo } = req.user;

    const verify = otps.find((data) => data.mobileNo === mobileNo);
    const now = new Date();
    const threshold = new Date(now.getMinutes() - 5 * 60 * 1000);
    if (verify?.time <= threshold) {
      return res.status(400).json({ success: false, message: "OTP Expired!" });
    }
    if (verify.otp != otp) {
      return res.status(400).json({ success: true, message: "Invalid OTP" });
    }
    const index = otps.findIndex((data) => data.mobileNo === mobileNo);
    if (index !== -1) {
      veriedMobileNos.push({
        time: new Date(),
        mobileNo: otps[index].mobileNo,
      });
      otps.splice(index, 1);
    }
    res.status(201).json({ success: true, message: "Valid OTP" });
  } catch (err) {
    console.log("Error while generating OTP:-", err);
    res.status(500).json({ success: true, message: "Something Went Wrong!" });
  }
};

export const signup = async (req, res) => {
  try {
    let { id: mobileNo } = req.user;
    const { fName, lName, password, repassword } = req.body;

    if (!fName || !lName || !password || !repassword) {
      return res
        .status(400)
        .json({ success: true, message: "All fields are mandatory!" });
    }

    const userExist = await customer.findOne({
      where: { mobileNo: mobileNo, password: password },
    });

    if (userExist) {
      return res
        .status(400)
        .json({ success: true, message: "User already exists!" });
    }

    if (password !== repassword) {
      return res.status(400).json({
        success: true,
        message: "Both the passwords should be same!",
      });
    }
  } catch (err) {
    console.log("Error while signing up:- ", err);
    res.status(500).json({ success: true, message: "Something Went Wrong!" });
  }
};

export const signin = async (req, res) => {
  try {
    const { mobileNo, password } = req.body;
    if (!mobileNo || !password) {
      return res
        .status(400)
        .json({ success: true, message: "All fields are mandatory!" });
    }

    const userExist = await customer.findOne({
      where: { mobileNo: mobileNo, password: password },
    });
    if (!userExist) {
      return res
        .status(404)
        .json({ success: true, message: "Invalid mobile or password!" });
    }
    const {party_code,user_type,role}= userExist;

    const token = jwt.sign({ mobileNo }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    // Fetch menu items for the user
    const { menu_element_ids = null } =
      (await dashboard_menus.findOne({
        raw: true,
        attributes: ["menu_element_ids"],
        where: {
          // party_code,
          user_type,
          role,
        },
      })) ?? {}; // If query return null than set empty object as default value
    // If no menus found, return error
    if (!menu_element_ids || menu_element_ids.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No access menus found for this user.",
      });
    }
    //parse json string to array
    const parsedStr = JSON.parse(menu_element_ids);
    let rawMenus = await menu_elements.findAll({
      raw: true,
      attributes: ["menu_label", "route", "hierarchy_level", "icon"],
      where: { Id: parsedStr },
      order: [["hierarchy_level", "ASC"]],
    });

    // If no menus found, return error
    if (!rawMenus || rawMenus.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No access menus found for this user.",
      });
    }

    // Filter main menus and submenus
    const menus = rawMenus.filter((menu) => {
      return menu.hierarchy_level.split(".").length === 2;
    });

    // Process main menus and submenus
    const allMenus = menus.map((menu) => {
      let data = {
        label: menu.menu_label,
        to: menu.route,
        icon: menu.icon,
        id: menu.route.split("/").filter((x) => x !== "")[1],
      };
      const subMenus = rawMenus.filter((subMenu) => {
        return (
          subMenu.hierarchy_level.split(".").length === 3 &&
          subMenu.hierarchy_level.substring(0, menu.hierarchy_level.length) ===
            menu.hierarchy_level
        );
      });
      const allSideMenus = subMenus.map((subMenu) => {
        return {
          label: subMenu.menu_label,
          to: subMenu.route,
          icon: subMenu.icon,
          id: subMenu.route.split("/").filter((x) => x !== "")[1],
        };
      });
      data.subs = allSideMenus;
      return data;
    });
    res.status(200).json({ success: true, data:{token,allMenus} });
  } catch (err) {
    res.status(500).json({ success: true, message: "Something Went Wrong!" });
  }
};
