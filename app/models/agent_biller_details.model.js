import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const agent_biller_details = connection.define(
  "agent_biller_details",
  {
    agent_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    agent_type: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    app_ref_sr_no: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    biller_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    biller_code: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    pricing_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    settlement_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
