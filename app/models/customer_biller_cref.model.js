import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const customer_biller_cref = connection.define(
  "customer_biller_cref",
  {
    cust_biller_id: {
      type: DataTypes.INTEGER(8),
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    customer_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    biller_id: {
      unique:true,
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    biller_customer_account_no: 
    { type: DataTypes.STRING(20), 
      allowNull: true },

  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);  