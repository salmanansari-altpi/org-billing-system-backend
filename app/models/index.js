import { agent_biller_details } from "./agent_biller_details.js";
import { biller } from "./biller.js";
import { biller_bills } from "./Biller_Bills.js";
import { biller_details } from "./biller_details.model.js";

export const models = {
  agent_biller_details,
  biller,
  biller_bills,
  biller_details,
};

//Dictates whether tables are modified or not;
const flag = false; // !! KEEP IT FALSE I REPEAT KEEP IT FALSE

const flag2 = false; //! ARE YOU SURE?

const syncAllTables = async (models) => {
  if (flag) {
    try {
      for (const [modelName, model] of Object.entries(models)) {
        await model.sync({ alter: flag2 });
        console.log(`Table ${modelName} synchronized successfully!`);
      }
      console.log("Models altered and synchronized!");
    } catch (error) {
      console.error("Unable to synchronize tables:", error);
    }
  }
};

syncAllTables(models);
