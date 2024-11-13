import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const consumer_request = connection.define(
  "consumer_request",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    biller_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    biller_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: false,
    },
    consumer_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    valid_upto: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    external_reference_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    txn_unique_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    amount: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  { timestamps: true, freezeTableName: true }
);

consumer_request
  .sync({ alter: true })
  .then(() =>
    console.log(
      "Sync Table Consumer Request ---------------------------------------------"
    )
  )
  .catch((err) =>
    console.log(
      "Error catching CONSUMER REQUEST +++++++++++++++++++++++++++++++++"
    )
  );
