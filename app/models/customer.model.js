import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const customer = connection.define(
  "customer",
  {
    customer_id: {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    app_ref_sr_no: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
    },
    cust_email_id: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    cust_password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cust_mobile_no: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    cust_last_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    cust_first_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    registered_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    suspended_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);
