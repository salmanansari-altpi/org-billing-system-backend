import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const registration_log_in = connection.define(
  "registration_log_in",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    partner_app_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    partner_app_ref_no: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    customer_mobile_no: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    customer_lat_long: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ch_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    customer_first_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    customer_last_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    customer_currency: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    // Define table name explicitly
    tableName: "registration_log_in",
    timestamps: true,
    underscored: true,
  }
);
