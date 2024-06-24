import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const menu_elements = connection.define(
    "menu_elements",
    {
      id: {
        type: DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      hierarchy_level: {
        type: DataTypes.STRING(10),
      },
      route: {
        type: DataTypes.STRING(50),
      },
      menu_label:{
          type: DataTypes.STRING(25),
      },
      menu_description: {
        type: DataTypes.STRING(100),
      },
      icon: {
        type: DataTypes.STRING(25),
      },
    },
    {
      // Freeze Table Name
      freezeTableName: true,
      timestamps: true,
    }
  );