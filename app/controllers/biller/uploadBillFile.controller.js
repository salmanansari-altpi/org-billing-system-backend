import { models } from "../../models/index.js";

const { billerDetails, biller_bills, biller } = models;
import multer from "multer";
import XLSX from "xlsx";
import csv from "csv-parser";
import { parseString } from "xml2js";
import path from "path";
import fs from "fs";
import cron from "node-cron";
import { where } from "sequelize";
import { generateUniqueString } from "../../utils/uniqueString.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("file");

/* please check upload biller file and store it with the sequence and delete it after 3 months  */

const ensureUniqueFilename = (directory, filename) => {
  let ext = path.extname(filename);
  let base = path.basename(filename, ext);
  let newFilename = filename;
  let counter = 1;

  while (fs.existsSync(path.join(directory, newFilename))) {
    newFilename = `${base}${counter}${ext}`;
    counter++;
  }

  return newFilename;
};

/* Set up a cron job to delete old files After3days */

const deleteFileAfter3days = (filePath) => {
  setTimeout(() => {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }, 60 * 1000); // 3days
};

/********************************************************************************************************** */
const readOpts = {
  // <--- need these settings in readFile options
  cellText: false,
  cellDates: true,
};

const jsonOpts = {
  defval: "",
  blankrows: true,
  raw: false,
  dateNF: 'd"/"m"/"yyyy', // <--- need dateNF in sheet_to_json options (note the escape chars)
};
export const uploadBillFile = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    try {
      if (!req.file) {
        return res
          .status(203)
          .json({ sucess: false, data: "File Not Uploaded " });
      }
      const { billerCode } = req.body;
      const { location_of_bill_file, biller_id } = await biller.findOne({
        raw: true,
        where: { biller_code: billerCode },
        attributes: ["location_of_bill_file", "biller_id"],
      });
      if (!location_of_bill_file) {
        return res
          .status(203)
          .json({ sucess: false, data: "location of file not define" });
      }

      const newDate = new Date().toDateString();
      const filePath = path.join(
        `${location_of_bill_file}`,
        `${billerCode}${newDate}.xlsx`
      );
      fs.writeFileSync(filePath, req.file.buffer);
      const workbook = XLSX.read(req.file.buffer, readOpts);
      const sheetNameList = workbook.SheetNames;
      const jsonData = XLSX.utils.sheet_to_json(
        workbook.Sheets[sheetNameList[0]],
        jsonOpts
      );

      try {
        // Delete existing records for the same customers
        const customerAccountNumbers = jsonData.map(
          (d) => d.biller_customer_account_no
        );
        await biller_bills.destroy({
          where: {
            biller_customer_account_no: customerAccountNumbers,
            biller_code: billerCode,
          },
        });

        // Insert new records
        for (const d of jsonData) {
          const transactionCode = generateUniqueString();
          if (
            d &&
            d.biller_bill_amount != "" &&
            d.biller_customer_account_no != ""
          ) {
            await biller_bills.create({
              transaction_code: transactionCode,
              biller_id: biller_id,
              biller_code: billerCode,
              biller_customer_account_no: d.biller_customer_account_no,
              biller_bill_no: d.biller_bill_no,
              biller_customer_name: d.biller_customer_name,
              biller_bill_date: d.biller_bill_date,
              biller_bill_amount: d.biller_bill_amount,
              biller_other_charges: d.biller_other_charges,
              biller_taxes: d.biller_taxes,
              biller_pending_due: d.biller_pending_due,
              biller_total_amount_due: d.biller_total_amount_due,
              last_meter_reading: d.last_meter_reading,
              current_meter_reading: d.current_meter_reading,
              units_consumed: d.units_consumed,
              reading_date: d.reading_date,
              due_date: d.due_date,
            });
          }
        }
        deleteFileAfter3days(filePath);
        return res.status(200).json({
          sucess: true,
        });
      } catch (error) {
        return res
          .status(500)
          .send(`Error uploading the file. ${error.message}`);
      }
      //  return res.json(jsonData);
    } catch (error) {
      return res.status(500).send("Error uploading the file.");
    }
  });
};

export const callApi = async (req, res) => {
  const { billerCode } = req.body;

  try {
    // Retrieve biller information
    const { location_of_bill_file, biller_id } = await biller.findOne({
      raw: true,
      where: { biller_code: billerCode },
      attributes: ["location_of_bill_file", "biller_id"],
    });

    if (!location_of_bill_file) {
      return res.status(203).json({ success: false, data: "API not defined" });
    }

    // Fetch biller data
    const response = await fetch(location_of_bill_file);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const jsondata = await response.json();
    if (!jsondata || !Array.isArray(jsondata)) {
      return res
        .status(202)
        .json({ success: false, data: "Data not available!" });
    }

    // Process and save each bill entry
    for (const d of jsondata) {
      if (
        d &&
        d.biller_bill_amount !== "" &&
        d.biller_customer_account_no !== ""
      ) {
        await biller_bills.create({
          biller_id: biller_id,
          biller_code: billerCode,
          biller_customer_account_no: d.biller_customer_account_no,
          biller_bill_no: d.biller_bill_no,
          biller_customer_name: d.biller_customer_name || null,
          biller_bill_date: d.biller_bill_date || null,
          biller_bill_amount: d.biller_bill_amount,
          biller_other_charges: d.biller_other_charges || null,
          biller_taxes: d.biller_taxes || null,
          biller_pending_due: d.biller_pending_due || null,
          biller_total_amount_due: d.biller_total_amount_due || null,
          last_meter_reading: d.last_meter_reading || null,
          current_meter_reading: d.current_meter_reading || null,
          units_consumed: d.units_consumed || null,
          reading_date: d.reading_date || null,
          due_date: d.due_date || null,
        });
      }
    }

    return res.status(200).json({
      success: true,
      data: "Data Updated Successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: "Internal server error",
      error: error.message,
    });
  }
};
