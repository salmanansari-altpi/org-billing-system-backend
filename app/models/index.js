import { prod_integration } from "./prod_integration.model.js";
import { product } from "./product.model.js";
import { registration_adminuser } from "./registration_adminuser.model.js";
import { registration_log_in } from "./registration_log_in.model.js";
import { user_type_master } from "./user_type_master.model.js";
import { agent_biller_details } from "./agent_biller_details.model.js";
import { biller } from "./biller.model.js";
import { biller_bills } from "./Biller_Bills.model.js";
import { biller_category_master } from "./biller_category_master.model.js";
import { biller_contact } from "./biller_contact.model.js";
import { bill_frequency } from "./bill_frequency.model.js";
import { country } from "./country.model.js";
import { currency } from "./currency.model.js";
import { customer } from "./customer.model.js";

import { registration_log_out } from "./registration_log_out.model.js";
import { role_master } from "./role_master.model.js";
import { sales_login } from "./sales_login.model.js";
import { source_of_bill } from "./source_of_bill.model.js";
import { switch_master } from "./switch_master.model.js";
import { systemcode } from "./systemcode.model.js";
import { ui_merchant } from "./ui_merchant.model.js";
import { user_access } from "./user_access.model.js";
import { user_master } from "./user_master.model.js";

import { customer_biller_cref } from "./customer_biller_cref.model.js";
import { language_master } from "./language_master.model.js";
import { partner_bank } from "./partner_bank.model.js";
import { pay_authority } from "./pay_authority.model.js";
import { payment_methods } from "./payment_methods.model.js";
import { payment_txn } from "./payment_txn.model.js";
import { agent_details } from "./agent_details.model.js";
import { billing_plan_type } from "./billing_plan_type.model.js";
import { cust_type_menu } from "./cust_type_menu.model.js";
import { dashboard_menus } from "./dashboard_meuns.model.js";
import { menu_elements } from "./menu_elements.model.js";
import { biller_cycle_details } from "./biller_cycle_details.model.js";
import { biller_cycle_log } from "./biller_cycle_log.model.js";

export const models = {
  agent_biller_details,
  agent_details,
  biller,
  biller_bills,
  biller_category_master,
  biller_contact,
  biller_cycle_details,
  bill_frequency,
  billing_plan_type,
  country,
  currency,
  customer,
  cust_type_menu,
  dashboard_menus,
  menu_elements,
  prod_integration,
  product,
  prod_integration,
  registration_adminuser,
  registration_log_in,
  registration_log_in,
  registration_log_out,
  registration_adminuser,
  role_master,
  sales_login,
  user_type_master,
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
  payment_txn,
  biller_cycle_details,
  biller_cycle_log,
};

//Dictates whether tables are modified or not;
// !! KEEP IT FALSE I REPEAT KEEP IT FALSE
const flag = false;

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
