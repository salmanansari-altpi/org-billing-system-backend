import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const language_master = connection.define(
    'language_master', 
    {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      autoIncrement: true,
      primaryKey: true
    },
    biller_code: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    application_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    language_code: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    language_description: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps:true
  }
); 
  
  
  
