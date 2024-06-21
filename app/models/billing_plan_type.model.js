import { DataTypes } from 'sequelize';
import { connection } from '../config/db.js'; // Adjust the path according to your project structure

export const billing_plan_type = connection.define(
  'billing_plan_type',
  {
    billing_plan_type_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    billing_plan_type_code: {
      type: DataTypes.STRING(6),
      allowNull: true,
      unique: true,
    },
    billing_plan_type_description: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
   
  }
);
