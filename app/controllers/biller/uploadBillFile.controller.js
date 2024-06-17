
import { models } from '../../models/index.js';

const { billerDetails } = models;
import multer from "multer";
import XLSX from "xlsx";
import csv from "csv-parser";
import { parseString } from "xml2js";
import { biller_bills } from '../../models/Biller_Bills.model.js';
import path from 'path';
import fs from 'fs';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file')
export const uploadBillFile =  async (req, res) => {
   
        
upload(req, res, async(err)=>{

    if (err) {
        return res.status(500).json({error:err.message});
      }
      try {
        const{ billerCode }= req.body;
        const filePath = path.join("upload", `${billerCode}.xlsx`);
        fs.writeFileSync(filePath, req.file.buffer);
        const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
        const sheetNameList = workbook.SheetNames;
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);
        jsonData.forEach(async(d)=>{
         try {
          console.log(d,"-",billerCode);
          await biller_bills.create({
            biller_id:d.biller_id,
            biller_code:billerCode,
            biller_customer_account_no:d.biller_customer_account_no,
            biller_bill_no:d.biller_bill_no,
            biller_customer_name:d.biller_customer_name,
            biller_bill_date:d.biller_bill_date,
            biller_bill_amount:d.biller_bill_amount,
            biller_other_charges:d.biller_other_charges,
            biller_taxes:d.biller_taxes,
            biller_pending_due:d.biller_pending_due,
            biller_total_amount_due:d.biller_total_amount_due,
            last_meter_reading:d.last_meter_reading,
            current_meter_reading:d.current_meter_reading,
            units_consumed:d.units_consumed,
            reading_date:d.reading_date,
            
          })
          
         } catch (error) {
          return res.status(500).send(`Error uploading the file.${error}`);
         }
         
        })
     
      //  return res.json(jsonData);
      } catch (error) {
        console.error("Error storing file in the database:", error);
       return res.status(500).send("Error uploading the file.");
  
      }
})

  
}
