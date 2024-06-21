import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const user_master = connection.define(
  "user_master",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    party_code: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    party_type: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    user_type: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    ch_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    f_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    l_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    mobile_no: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    register_date: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    leave_date: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    last_otp: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    last_otp_date_time: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    access_code: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    parental_access: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    principal_access: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    no_of_nodes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
  }
);
