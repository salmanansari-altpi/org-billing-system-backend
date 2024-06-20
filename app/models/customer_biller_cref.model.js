import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const customer_biller_cref = connection.define(
  "customer_biller_cref",
  {
    cust_biller_id: {
      type: DataTypes.INTEGER(8),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    biller_id: {
      unique:true,
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    biller_customer_account_no: 
    { type: DataTypes.STRING(20), 
      allowNull: false },

  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);  