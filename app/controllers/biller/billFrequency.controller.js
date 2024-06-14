import { models } from "../models/index.js";

const { biller_frequency } = models;

export const getBillFrequency = async (req, res) => {
  try {

    // Get the frequency code from request parameters
    const { frequency_code } = req.params;
    
     // Validate the frequency code
     const validFrequencyCodes = ['perDay', 'perWeek', 'perMonth', 'perYear'];

    if (!validFrequencyCodes.includes(frequency_code)) {
      return res.status(400).json({ error: 'Invalid frequency code' });
    }

    // Finding the bill frequency based on the frequency code
    const billFrequency = await biller_frequency.findAll({
      attributes: ["frequency_code", "frequency_description"],
    });
    console.log(billFrequency);

    return res.status(200).json({ data: { billFrequency } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


