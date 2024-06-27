import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const biller_cycle_log = connection.define(
  "biller_cycle_log",
  {
    biller_log_id : {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    biller_cycle_dtl_id:{
        type: DataTypes.INTEGER(6),
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
    biller_cycle_day_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    process :{
        type: DataTypes.STRING(12),
        allowNull: true,
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)