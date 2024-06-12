import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const sales_login = connection.define(
  "sales_login",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    mobile_no: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: false,
  }
);
