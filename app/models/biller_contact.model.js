import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const biller_contact = connection.define(
  "biller_contact",
  {
    biller_contact_id: {
      type: DataTypes.INTEGER(8),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    biller_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    address_1: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    address_2: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    pin: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    contact_name_1: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    mobile_no_1: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    email_1: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    contact_name_2: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    mobile_no_2: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    email_2: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    contact_name_3: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    mobile_no_3: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    email_3: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },  
  },
   {
        // Freeze Table Name
        freezeTableName: true,
      }
)