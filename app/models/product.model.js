import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const product = connection.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },
    product_code: {
      type: DataTypes.STRING(8),
      allowNull: true,
      unique: true,
    },
    product_description: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    product_note: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
    },
    product_status: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
  
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    // Define table name explicitly
    tableName: "product",
    timestamps: true,
  }
);
