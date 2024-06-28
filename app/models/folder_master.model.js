import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const folder_master = connection.define(
  "folder_master",
  {
    id: {
      type: DataTypes.INTEGER(),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    location_of_file: {
      type: DataTypes.STRING(50),
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
  }
);
