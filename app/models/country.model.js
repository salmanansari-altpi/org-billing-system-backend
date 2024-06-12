import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const country = connection.define(
  "country",
  {
    country_id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
    },
    country_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    currency_code: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
)