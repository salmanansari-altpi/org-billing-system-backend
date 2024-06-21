import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const registration_adminuser = connection.define(
  "registration_adminuser",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
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
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },

  },
  {
    // Freeze Table Name
    freezeTableName: true,
    // Define table name explicitly
    tableName: "registration_adminuser",
    timestamps: true,
    underscored: true,
  }
);
