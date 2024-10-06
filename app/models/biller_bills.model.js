import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const biller_bills = connection.define(
  "biller_bill",
  {
    biller_bill_id: {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
    },
    //this is the same_id picked from biller table
    biller_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    // biller code picked up from iler table
    biller_code: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    transaction_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    biller_customer_account_no: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    biller_bill_no: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    biller_customer_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    biller_bill_date: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    biller_bill_amount: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    biller_other_charges: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    biller_taxes: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    biller_pending_due: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    biller_total_amount_due: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    last_meter_reading: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    current_meter_reading: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    units_consumed: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    reading_date: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    due_date: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },

    paid_indicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    paid_amount: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    paid_date: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
  },
  {
    timestamps: true, // If you want Sequelize to manage createdAt and updatedAt fields, set this to true
    freezeTableName: true,
  }
);
