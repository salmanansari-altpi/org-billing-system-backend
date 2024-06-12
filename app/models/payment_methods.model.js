import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const payment_methods = connection.define(
    
    'payment_methods', {
    payment_method_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      comment: 'running unique id'
    },
    payment_method_code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      unique: true
    },
    payment_method_description: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);  