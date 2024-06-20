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
      allowNull: true,
    },
    currency_code: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
  
  },{
        // Freeze Table Name
        freezeTableName: true,
  }
)