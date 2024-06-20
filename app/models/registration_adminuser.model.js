import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const registration_adminuser = connection.define(
  "registration_adminuser",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    f_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    l_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: false,
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
