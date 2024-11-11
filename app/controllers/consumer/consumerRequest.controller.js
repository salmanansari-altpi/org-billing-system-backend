import { where } from "sequelize";
import { models } from "../../models/index.js";
import fetch from "node-fetch";
import { generateUniqueString } from "../../utils/uniqueString.js";
import { formatDateForDatabase } from "../../utils/date.js";

const { biller, consumer_request, api_based_biller } = models;
export const apiBasedBillers = async (req, res) => {
  try {
    const data = await api_based_biller.findAll({});
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const consumerRequest = async (req, res) => {
  try {
    const { biller_code, customer_account_no } = req.body;
    if (!biller_code || !customer_account_no) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory!" });
    }
    const apiBillerData = await api_based_biller.findOne({
      raw: true,
      where: { biller_code: biller_code },
    });
    if (!apiBillerData) {
      return res.status(404).json({ success: false, message: "Not Found!" });
    }
    if (apiBillerData.api_auth_type === null) {
      const response = await fetch(apiBillerData.api + customer_account_no);
      const [responseData] = await response.json();

      const txnCode = generateUniqueString(biller_code);
      const validTime = new Date(new Date().getTime() + 1000 * 60 * 4);
      const valid_upto = formatDateForDatabase(validTime);

      await consumer_request.create({
        txn_unique_number: txnCode,
        amount: responseData.amount,
        valid_upto,
        biller_code: biller_code,
        consumer_number: customer_account_no,
      });
      const billerInfo = await biller.findOne({
        raw: true,
        attributes: ["biller_name", "logo_image"],
        where: { biller_code },
      });

      const intent = `upi://pay?tr=&tid=&pa=&mc=1234&pn=${biller_code}&am=${responseData.amount}&cu=&tn=Pay%20for%20merchant&txn_code=${txnCode}`;
      const data = {
        ...billerInfo,
        ...responseData,
        intent,
        valid_upto,
      };
      return res.status(200).json({ success: true, data: data });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

export const externalLinkQR = async (req, res) => {
  try {
    const { biller_code, amount, unique_id } = req.body;

    const validDate = new Date(new Date().getTime() + 1000 * 60 * 4);
    const valid_upto = formatDateForDatabase(validDate);
    await consumer_request.create({
      biller_code,
      amount,
      txn_unique_number: unique_id,
      valid_upto,
    });
    const { biller_name } = await biller.findOne({
      raw: true,
      attributes: ["biller_name"],
      where: { biller_code },
    });
    const intent = `upi://pay?tr=&tid=&pa=&mc=1234&pn=${biller_code}&am=${amount}&cu=&tn=Pay%20for%20merchant&txn_code=${unique_id}`;
    const data = {
      biller_name,
      intent,
      transaction_code: unique_id,
      amount: amount,
      valid_upto,
    };
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};
