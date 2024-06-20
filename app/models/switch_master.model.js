import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const switch_master = connection.define(
  "switch_master",
  {
    switch_id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    switch_code: {
      type: DataTypes.STRING(6),
      allowNull: true,
      unique: true,
    },
    switch_name: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    switch_status: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    switch_note: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
  }
);
