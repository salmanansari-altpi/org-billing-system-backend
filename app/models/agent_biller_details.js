import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const agent_biller_details = connection.define(
  "agent_biller_details",
  {
    agent_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    app_ref_sr_no: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    biller_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    biller_code: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    agent_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    agent_type: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    tax_id_no: {
      type: DataTypes.STRING(100),
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
    mdr_percentage: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
