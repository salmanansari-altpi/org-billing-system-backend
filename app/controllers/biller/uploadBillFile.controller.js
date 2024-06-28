
import { models } from '../../models/index.js';

const { billerDetails ,biller_bills} = models;
import multer from "multer";
import XLSX from "xlsx";
import csv from "csv-parser";
import { parseString } from "xml2js";
import path from 'path';
import fs from 'fs';
import cron from 'node-cron';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file');


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
      console.log(`Deleted file: ${filePath}`);
    }
  },  3*24*60*60 * 1000); // 3days
};


/********************************************************************************************************** */

export const uploadBillFile =  async (req, res) => {       
upload(req, res, async(err)=>{

    if (err) {  
        return res.status(500).json({error:err.message});
      }
      try {
        const{ billerCode }= req.body;
        const newDate = new Date().toDateString();
        const filePath = path.join("upload", `${billerCode}${newDate}.xlsx`);
        fs.writeFileSync(filePath, req.file.buffer);
        const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
        const sheetNameList = workbook.SheetNames;
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

        try {
                  // Delete existing records for the same customers
                  const customerAccountNumbers = jsonData.map(d => d.biller_customer_account_no);
                  await biller_bills.destroy({
                    where: {
                      biller_customer_account_no: customerAccountNumbers,
                      biller_code: billerCode
                    },
                  
                  });

         // Insert new records
         for (const d of jsonData) {
          await biller_bills.create({
            biller_id: d.biller_id,
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
          },);
        }
        deleteFileAfter3days(filePath);
        return res.status(200).json({
          sucess: true,
        })
      } catch (error) {
        console.error("Error saving bill data:", error);
        return res.status(500).send(`Error uploading the file. ${error.message}`);
      }
      //  return res.json(jsonData);
      } catch (error) {
        console.error("Error storing file in the database:", error);
       return res.status(500).send("Error uploading the file.");
  
      }
})
  
}
