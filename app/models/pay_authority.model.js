import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const pay_authority = connection.define(
    'pay_authority', 
    {
    PayAuthority_Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    PayAuthority_Code: {
      type: DataTypes.STRING(4),
      allowNull: true,
      unique: true
    },
    PayAuthority_Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PayAuthority_Note: {
      type: DataTypes.BLOB('long'),
      allowNull: false
    },
    PayAuthority_Status: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },


{

    // Freeze Table Name
    freezeTableName: true,
  }
);  
