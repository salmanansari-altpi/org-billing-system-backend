import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const user_type_master = connection.define(
  "user_type_master",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_type: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    mandatory: {
      type: DataTypes.STRING(1),
      allowNull: false,
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
