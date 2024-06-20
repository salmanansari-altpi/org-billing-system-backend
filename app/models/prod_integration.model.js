import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const prod_integration = connection.define(
  "prod_integration",
  {
    int_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    integration_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: true,
    },
    integration_description: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    product_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    product_code: {
      type: DataTypes.STRING(8),
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
    partner_bank_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    partner_bank_code: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    switch_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    switch_code: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    payauthority_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    payauthority_trailer: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    msg_logo_displ_indicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    display_message: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    logo_display: {
      type: DataTypes.BLOB('medium'),
      allowNull: true,
    },
    int_status: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    salt: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
   
    webhook: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
   
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    // Define table name explicitly
    tableName: "prodintegration",
    timestamps: true,
  }
);
