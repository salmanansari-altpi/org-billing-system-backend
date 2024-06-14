import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const biller_bills = connection.define(
  "biller_bill",
  {
    biller_bill_id: {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    //this is the same_id picked from biller table
    biller_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    // biller code picked up from iler table
    biller_code: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    biller_customer_account_no: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    biller_bill_no: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    biller_customer_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    biller_bill_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    biller_bill_amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    biller_other_charges: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    biller_taxes: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    biller_pending_due: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    biller_total_amount_due: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    last_meter_reading: {
      type: DataTypes.DECIMAL(14, 2),
      allowNull: false,
    },
    current_meter_reading: {
      type: DataTypes.DECIMAL(14, 2),
      allowNull: false,
    },
    units_consumed: {
      type: DataTypes.DECIMAL(14, 2),
      allowNull: false,
    },
    reading_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paid_indicator: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    paid_amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    paid_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false, // If you want Sequelize to manage createdAt and updatedAt fields, set this to true
    freezeTableName: true,
    
  }
);
