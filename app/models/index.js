import { prod_integration } from "./prod_integration.model.js";
import { product } from "./product.model.js";
import { registration_adminuser } from "./registration_adminuser.model.js";
import { registration_log_in } from "./registration_log_in.model.js";
import { user_type_master } from "./user_type_master.model.js";
import { agent_biller_details } from "./agent_biller_details.js";
import { biller } from "./biller.js";
import { biller_bills } from "./Biller_Bills.js";
import { biller_category_master } from "./biller_category_master.model.js";
import { biller_contact } from "./biller_contact.model.js";
import { biller_frequency } from "./bill_frequency.js";
import { country } from "./country.model.js";
import { currency } from "./currency.model.js";
import { customer } from "./customer.model.js";

import { registration_log_out } from "./registration_log_out.js";
import { role_master } from "./role_master.js";
import { sales_login } from "./sales_login.js";
import { source_of_bill } from "./source_of_bill.js";
import { switch_master } from "./switch_master.js";
import { systemcode } from "./systemcode.js";
import { ui_merchant } from "./ui_merchant.js";
import { user_access } from "./user_access.js";
import { user_master } from "./user_master.js";

import {customer_biller_cref} from "./customer_biller_cref.model.js";
import {language_master} from "./language_master.model.js";
import {partner_bank} from "./partner_bank.model.js";
import {pay_authority} from "./pay_authority.model.js";
import {payment_methods} from "./payment_methods.model.js";
import {payment_txn} from "./payment_txn.model.js"


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
  biller_frequency,
  country,
  currency,
  customer,
  agent_biller_details,
  biller,
  biller_bills,
  product,
  prod_integration,
  role_master,
  registration_log_in,
  registration_log_out,
  registration_adminuser,
  sales_login,
  systemcode,
  source_of_bill,
  switch_master,
  ui_merchant,
  user_access,
  user_master,
  user_type_master,
 
    customer_biller_cref,
    language_master,
    partner_bank,
    pay_authority,
    payment_methods,
    payment_txn 
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
