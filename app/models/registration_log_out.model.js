import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const registration_log_out = connection.define(
  "registration_log_out",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    customer_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    app_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ref_no: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    partner_app_ref_no: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    assigned_vpa: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    result: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    error_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    error_desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
  }
);
