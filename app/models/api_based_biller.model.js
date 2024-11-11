import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const api_based_biller = connection.define(
  "api_based_biller",
  {
    biller_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    biller_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    biller_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    api: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    api_key: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    api_salt: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    api_auth_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    webhook: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    webhook_key: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    webhook_salt: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  { timestamps: true, freezeTableName: true }
);

