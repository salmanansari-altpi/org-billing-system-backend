import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const systemcode = connection.define(
  "systemcode",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    code_type: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    sys_code: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    code_description: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
  }
);
