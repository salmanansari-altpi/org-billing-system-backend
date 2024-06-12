import { billerDetails } from "./Biller_details.model.js";
import {customer_biller_cref} from "./customer_biller_cref.model.js";
import {language_master} from "./language_master.model.js";
import {partner_bank} from "./partner_bank.model.js";
import {pay_authority} from "./pay_authority.model.js";
import {payment_methods} from "./payment_methods.model.js";
import {payment_txn} from "./payment_txn.model.js"




export const models = {
    billerDetails,
    customer_biller_cref,
    language_master,
    partner_bank,
    pay_authority,
    payment_methods,
    payment_txn

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