import { prod_integration } from "./prod_integration.model.js";
import { product } from "./product.model.js";
import { registration_adminuser } from "./registration_adminuser.model.js";
import { registration_log_in } from "./registration_log_in.model.js";
import { user_type_master } from "./user_type_master.model.js";
import { agent_biller_details } from "./agent_biller_details.js";
import { biller } from "./biller.js";
import { biller_bills } from "./Biller_Bills.js";
import {biller_category_master} from "./biller_category_master.model.js";
import {biller_contact} from "./biller_contact.model.js";
import {country}  from "./country.model.js";
import {currency  } from "./currency.model.js";
import {customer} from "./customer.model.js";


export const models = {
   
    prod_integration,
    product,
    registration_adminuser,
    registration_log_in,
    user_type_master,
    agent_biller_details,
    biller,
    biller_bills,
    biller_category_master,
    biller_contact,
    country,
    currency,
    customer
}

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
