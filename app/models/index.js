import { billerDetails } from "./Biller_details.model.js";




export const models = {
    billerDetails
}

//Dictates whether tables are modified or not;
const flag = true; // !! KEEP IT FALSE I REPEAT KEEP IT FALSE

const flag2 = true;//! ARE YOU SURE? 


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