import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const biller_frequencies = connection.define(
  "biller_frequencies",
  {
    bill_freq_id: {
      type: DataTypes.INTEGER(2),
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    frequency_code: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    frequency_description: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
