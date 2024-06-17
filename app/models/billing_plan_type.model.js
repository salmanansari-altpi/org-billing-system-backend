import { DataTypes } from 'sequelize';
import { connection } from '../config/db.js'; // Adjust the path according to your project structure

export const billing_plan_type = connection.define(
  'billing_plan_type',
  {
    billing_plan_type_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    billing_plan_type_code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      unique: true,
    },
    billing_plan_type_description: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
   
  }
);
