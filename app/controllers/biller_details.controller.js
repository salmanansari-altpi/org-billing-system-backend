import { models } from "../models/index.js";
const { billerDetails } = models;
import multer from "multer";
import xlsx from "xlsx";
import csv from "csv-parser";
import { parseString } from "xml2js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("file");
export const getBillerDetails = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    try {
      const pdfData = req.file.buffer;
      await billerDetails.findAll();

      console.log(billerDetails);
      console.log("File uploaded and stored in the database.");
      res.send("File uploaded successfully.");
    } catch (error) {
      console.error("Error storing file in the database:", error);
      res.status(500).send("Error uploading the file.");
    }
  });
};
