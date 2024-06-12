import { billerDetails } from "./Biller_details.model.js";
import {biller_category_master} from "./biller_category_master.model.js";
import {biller_contact} from "./biller_contact.model.js";
import {country}  from "./country.model.js";
import {currency  } from "./currency.model.js";
import {customer} from "./customer.model.js";


export const models = {
    billerDetails,
    biller_category_master,
    biller_contact,
    country,
    currency,
    customer
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