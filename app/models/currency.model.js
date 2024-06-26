import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const currency = connection.define(
  "currency",
  {
    currency_iD: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    currency_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    currency_icon: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
