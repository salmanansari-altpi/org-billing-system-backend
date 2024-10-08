import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const biller = connection.define(
  "biller",
  {
    biller_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    biller_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    biller_status: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    biller_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    biller_category: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    country_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    upi_trailer: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    npci_id_1: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    npci_id_2: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    txn_auth_yn: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    payment_method_01: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    payment_method_02: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    payment_method_03: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    payment_method_04: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    location_of_bill_file: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    source_of_bill_file: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    bill_freq_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    agent_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    bill_currency_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    billing_plan_type_id: {
      type: DataTypes.INTEGER(3),
    },
    logo_image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    logo_image_indicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    theme: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    background_image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    background_image_indicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    biller_message_1:{
      type: DataTypes.STRING(200),
      allowNull: true,

    },
biller_message_2:{
  type: DataTypes.STRING(200),
  allowNull: true,

},
biller_price_id :{
  type: DataTypes.INTEGER(6),
  allowNull: true,

},
biller_cycle:{
  type: DataTypes.INTEGER(2),
  allowNull: true,

}
    
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);
