import { billerDetails } from "./Biller_details.model.js";
import { prod_integration } from "./prod_integration.model.js";
import { product } from "./product.model.js";
import { registration_adminuser } from "./registration_adminuser.model.js";
import { registration_log_in } from "./registration_log_in.model.js";
import { user_type_master } from "./user_type_master.model.js";




export const models = {
    billerDetails,
    prod_integration,
    user_type_master,
    registration_log_in,
    registration_adminuser,
    product
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