import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const biller_cycle_details = connection.define(
  "biller_cycle_details",
  {
    biller_cycle_dtl_id : {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    biller_id:{
        type: DataTypes.INTEGER(4),
        allowNull: false,
    },
    biller_cycle_no :{
        type: DataTypes.INTEGER(2),
        allowNull: false,
    },
    biller_cycle_day: {
        type: DataTypes.INTEGER(2),
        allowNull: true,
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)