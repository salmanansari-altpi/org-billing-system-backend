import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const agent_details = connection.define(
  "agent_details",
  {
    agent_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    agent_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    agent_type: {
      type: DataTypes.STRING(6),
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
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    mobile_no: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    email_id: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    business_reg_document: {
      type: DataTypes.BLOB("medium"),
      allowNull: true,
    },
    business_tax_id_document: {
      type: DataTypes.BLOB("medium"),
      allowNull: true,
    },
    individual_id_document: {
      type: DataTypes.BLOB("medium"),
      allowNull: true,
    },
    bank_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    bank_address: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    bank_routing_no: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    account_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    account_no: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    v_ac_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    v_ac_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    v_ifsc_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    v_upi_handle: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    label: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
