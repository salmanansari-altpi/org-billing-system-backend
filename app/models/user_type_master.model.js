import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const user_type_master = connection.define(
  "user_type_master",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    user_type: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    mandatory: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    // Define table name explicitly
    tableName: "user_type_master",
    timestamps: true,
    underscored: true,
  }
);
