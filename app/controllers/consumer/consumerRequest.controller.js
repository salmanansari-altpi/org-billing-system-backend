import { where } from "sequelize";
import { models } from "../../models/index.js";
import fetch from "node-fetch";
import { generateUniqueString } from "../../utils/uniqueString.js";
import { formatDateForDatabase } from "../../utils/date.js";
import { biller_bills } from "../../models/biller_bills.model.js";

const { biller, consumer_request, api_based_biller } = models;
export const apiBasedBillers = async (req, res) => {
  try {
    const data = await biller.findAll({});
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
    const billerInfo = await biller.findOne({
      raw: true,
      attributes: [
        "biller_name",
        "logo_image",
        "upi_trailer",
        "source_of_bill_file",
      ],
      where: { biller_code },
    });

    if (!billerInfo) {
      return res
        .status(404)
        .json({ success: false, message: "Biller not found!" });
    }

    if (billerInfo.source_of_bill_file == "API") {
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

        if (!responseData) {
          throw new Error("Invalid consumer account number!");
        }

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

        const intent = `upi://pay?tr=${txnCode}&pa=${billerInfo.upi_trailer}&mc=1234&pn=${biller_code}&am=${responseData.amount}&cu=&tn=Pay%20for%20merchant`;
        const data = {
          ...billerInfo,
          ...responseData,
          intent,
          valid_upto,
        };
        return res.status(200).json({ success: true, data: data });
      }
    } else {
      const data = await biller_bills.findOne({
        raw: true,
        where: {
          biller_code: biller_code,
          biller_customer_account_no: customer_account_no,
        },
      });

      if (!data) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid customer account no!" });
      }

      const { biller_total_amount_due } = data;
      const txnCode = generateUniqueString(biller_code);
      const validTime = new Date(new Date().getTime() + 1000 * 60 * 4);
      const valid_upto = formatDateForDatabase(validTime);
      await consumer_request.create({
        biller_code: biller_code,
        amount: biller_total_amount_due,
        txn_unique_number: txnCode,
        valid_upto,
      });
      const intent = `upi://pay?tr=${txnCode}&pa=${billerInfo.upi_trailer}&mc=1234&pn=${biller_code}&am=${biller_total_amount_due}&cu=&tn=Pay%20for%20merchant`;
      const info = {
        ...billerInfo,
        amount: biller_total_amount_due,
        intent,
        valid_upto,
      };
      return res.status(200).json({ success: true, data: info });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const externalLinkQR = async (req, res) => {
  try {
    const { biller_code, amount, unique_id } = req.body;
    if (!biller_code || !amount || !unique_id) {
      return res.status(400).json({ success: false, message: "Bad Data!" });
    }
    const txnCode = generateUniqueString(biller_code);
    const validDate = new Date(new Date().getTime() + 1000 * 60 * 4);
    const valid_upto = formatDateForDatabase(validDate);

    const uniqueIdExists = await consumer_request.findOne({
      raw: true,
      where: { external_reference_id: unique_id },
    });

    if (uniqueIdExists) {
      return res.status(400).json({ success: false, message: "Invalid ID!" });
    }

    await consumer_request.create({
      biller_code,
      amount,
      txn_unique_number: txnCode,
      valid_upto,
      external_reference_id: unique_id,
    });
    const billerInfo = await biller.findOne({
      raw: true,
      attributes: ["biller_name", "upi_trailer"],
      where: { biller_code },
    });
    if (!billerInfo) {
      return res
        .status(404)
        .json({ success: false, message: "Biller Not Found!" });
    }
    const { biller_name, upi_trailer } = billerInfo;
    const intent = `upi://pay?tr=${txnCode}&pa=${upi_trailer}&mc=1234&pn=${biller_code}&am=${amount}&cu=&tn=Pay%20for%20merchant`;
    const data = {
      biller_name,
      intent,
      transaction_code: txnCode,
      amount: amount,
      valid_upto,
    };
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    console.log(err);

    res.status(500).json({ success: false, message: err });
  }
};
