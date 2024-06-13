import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const payment_txn = connection.define('payment_txn', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    txn_id: {
      type: DataTypes.STRING(100),
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
    remitter_full_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    remitter_account_number: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    remitter_account_ifsc: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    remitter_phone_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    unique_transaction_reference: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    application_reference_no: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    payment_mode: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    service_charge: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    gst_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    service_charge_with_gst: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    bill_no: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    txn_code: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    customer_dr_cr: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    txn_description: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    local_validation_status: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    transaction_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    va_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    va_label: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    va_virtual_account_number: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    va_virtual_ifsc_number: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    credit_currency: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    credit_rate: {
      type: DataTypes.DECIMAL(15, 4),
      allowNull: true,
    },
    credit_amount: {
      type: DataTypes.DECIMAL(15, 4),
      allowNull: true,
    },
    charges_currency: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    charges_amount: {
      type: DataTypes.DECIMAL(15, 4),
      allowNull: true,
    },
    mct_app_refNo: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    upi_params_tid: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      // 
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      // 
    },
    endUser_account_no: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps:false
  }
);  
