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
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
  }
);
