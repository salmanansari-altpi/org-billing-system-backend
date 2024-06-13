import { models } from "../models/index.js";

const { biller_frequency } = models;

export const getBillFrequencyPerDay = async (req, res) => {
  try {
    //finding perday bill frequency
    const billFrequencyPerday = await biller_frequency.findAll({
      attributes: ["frequency_code", "frequency_description"],
    });
    console.log(billFrequencyPerday);

    return res.status(200).json({ data: { billFrequencyPerday } });
  } catch (error) {
    console.log(error);
  }
};

export const getBillFrequencyPerWeek = async (req, res) => {
  try {
    //finding perweekly bill frequency
    const BillFrequencyPerWeek = await biller_frequency.findAll({
      attributes: ["frequency_code", "frequency_description"],
    });
    console.log(BillFrequencyPerWeek);

    return res.status(200).json({ data: { BillFrequencyPerWeek } });
  } catch (error) {
    console.log(error);
  }
};

export const getBillFrequencyPerMontly = async (req, res) => {
  try {
    //finding permonthly bill frequency
    const BillFrequencyPerMontly = await biller_frequency.findAll({
      attributes: ["frequency_code", "frequency_description"],
    });
    console.log(BillFrequencyPerMontly);

    return res.status(200).json({ data: { BillFrequencyPerMontly } });
  } catch (error) {
    console.log(error);
  }
};

export const getBillFrequencyPerYearly = async (req, res) => {
  try {
    //finding peryearly bill frequency
    const BillFrequencyPerYearly = await biller_frequency.findAll({
      attributes: ["frequency_code", "frequency_description"],
    });
    console.log(BillFrequencyPerYearly);
    return res.status(200).json({ data: { BillFrequencyPerYearly } });
  } catch (error) {
    console.log(error);
  }
};
