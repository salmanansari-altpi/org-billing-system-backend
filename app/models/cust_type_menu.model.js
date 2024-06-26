import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const cust_type_menu = connection.define(
  "cust_type_menu", 
  {
    id: {
      type: DataTypes.INTEGER(),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    customer_type: {
      type: DataTypes.STRING(15),
    },
    party_type: {
      type: DataTypes.STRING(15),
    },
    user_type: {
      type: DataTypes.STRING(25),
    },
    role: {
      type: DataTypes.STRING(50),
    },
    menu_element_ids: {
      type: DataTypes.STRING(150),
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
  }
);
