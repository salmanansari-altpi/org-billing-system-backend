import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";


export const partner_bank = connection.define(
    'partner_bank', 
    {
  partner_bank_id: {
    type: DataTypes.INTEGER(6),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  partner_bank_code: {
    type: DataTypes.STRING(6),
    unique: true,
    allowNull: true
  },
  partner_bank_name: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  partner_bank_status: {
    type: DataTypes.STRING(2),
    allowNull: true
  },
  partner_bank_note: {
    type: DataTypes.BLOB,
    allowNull: true
  },
}, 
{
    // Freeze Table Name
    freezeTableName: true,
    timestamps:true
  }
);

