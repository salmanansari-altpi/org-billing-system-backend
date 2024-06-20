import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const product = connection.define(
  "product",
  {
    Product_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    Product_Code: {
      type: DataTypes.STRING(8),
      allowNull: true,
      unique: true,
    },
    Product_Description: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    Product_Note: {
      type: DataTypes.BLOB('long'),
      allowNull: true,
    },
    Product_Status: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
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
