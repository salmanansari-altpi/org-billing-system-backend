import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const systemcode = connection.define(
  "systemcode",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    code_type: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    sys_code: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    code_description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: false,
  }
);
