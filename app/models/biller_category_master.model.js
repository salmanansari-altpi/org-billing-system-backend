import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const biller_category_master = connection.define(
  "biller_category_master",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    customer_type: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    notes: {
      type: DataTypes.BLOB("medium"),
      allowNull: true,
    },

  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
