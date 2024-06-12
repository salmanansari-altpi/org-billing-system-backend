import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const biller_details = connection.define(
  "biller_details",
  {
    party_id: {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    country_id: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
    },
    party_code: {
      unique: true,
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    customer_type: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    party_status: {
      type: DataTypes.STRING(1),
      allowNull: true,
    }, //'1 - Live | 2 - Suspended | 8 - Boarded | 9 - Deleted'
    party_name: {
      type: DataTypes.STRING(100),
    },
    party_type: {
      type: DataTypes.STRING(4),
      allowNull: true,
    }, //PB - Partner Bank | CB - Commercial Bank | UB - Urban Coop Bank | DC - DCC | CU - Credit Union | CO - Corporate | NB - NBFC
    upi_trailer: {
      type: DataTypes.STRING(100),
    }, //Partner Bank's UPI Trailer - Example "@icici" etc.
    npci_id_1: {
      type: DataTypes.STRING(30),
    }, //NPCI BIN No
    npci_id_2: {
      type: DataTypes.STRING(30),
    }, //Additional NPCI Id if any
    txn_auth_yn: {
      type: DataTypes.STRING(10),
    }, //Whether the Debit Txn will be Auth Real-time
    personal_debit_card_yn: {
      type: DataTypes.STRING(10),
    }, //Whether Party will issue PDC
    pdc_add_on_card_yn: {
      type: DataTypes.STRING(10),
    }, //Whether Party will issue AOC
    corporate_debit_card_yn: {
      type: DataTypes.STRING(10),
    }, //Whether Party will issue Corporate Cards
    credit_card_yn: {
      type: DataTypes.STRING(10),
    }, //Whether Party will issue Credit Cards
    gift_card_yn: {
      type: DataTypes.STRING(10),
    }, //Whether Party will issue Gift Cards
    lender_yn: {
      type: DataTypes.STRING(10),
    }, //Whether Party will Provide Credit
    third_party_lending_yn: {
      type: DataTypes.STRING(10),
    }, //Whether Party has Third-party Lender
    third_party_lender_party_id: {
      type: DataTypes.STRING(6),
    }, //Third Party providing Credit for this Party
    logo_image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    }, //The Logo of the Customer
    logo_image_indicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    }, //"T" if Image exists else "F"
    theme: {
      type: DataTypes.STRING(15),
      allowNull: true,
    }, //The Colour Theme for the Customer
    background_image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    }, //Background Image for the customer
    background_image_indicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    }, //"T" if Image exists else "F"
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: false,
  }
);
