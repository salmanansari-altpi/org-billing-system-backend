import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const billerDetails = connection.define(
  "Biller_details",
  {
    Party_Id: {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Country_Id: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
    },
    Party_Code: {
      unique:true,
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    Customer_type: { type: DataTypes.STRING(6), allowNull: false },
    Party_Status: {
      type: DataTypes.STRING(1),
      allowNull: true,
    }, //'1 - Live | 2 - Suspended |   8-Boarded   | 9 - Deleted'
    Party_Name: {
      type: DataTypes.STRING(100),
    },
    Party_Type: {
      type: DataTypes.STRING(4),
      allowNull: true,
    }, //PB - Partner Bank | CB - Commercial Bank | UB - Urban Coop Bank | DC - DCC | CU - Credit Union| CO - Corporate | NB - NBFC
    UPI_Trailer: {
      type: DataTypes.STRING(100),
    }, //Partner Bank''s UPI Trailer - Example "@icici" etc.
    NPCI_ID_1: {
      type: DataTypes.STRING(30),
    }, //NPCI BIN No
    NPCI_ID_2: {
      type: DataTypes.STRING(30),
    }, //Additional NPCI Id if any
    Txn_Auth_YN: {
      type: DataTypes.STRING(10),
    }, //Whether the Debit Txn will be Auth Real-time
    Personal_Debit_Card_YN: {
      type: DataTypes.STRING(10),
    }, //Whether Party will issue PDC
    PDC_Add_on_Card_YN: {
      type: DataTypes.STRING(10),
    }, //Whether Party will issue AOC
    Corporate_Debit_Card_YN: {
      type: DataTypes.STRING(10),
    }, //Whether Party will issue Corporate Cards
    Credit_Card_YN: {
      type: DataTypes.STRING(10),
    }, //Whether Party will issue Credit Cards
    Gift_Card_YN: {
      type: DataTypes.STRING(10),
    }, //Whether Party will issue Gift Cards
    Lender_YN: {
      type: DataTypes.STRING(10),
    }, //Whether Party will Provide Credit
    Third_Party_Lending_YN: {
      type: DataTypes.STRING(10),
    }, //Whether Party has Third-party Lender
    Third_Party_Lender_Party_Id: {
      type: DataTypes.STRING(6),
    }, //Third Party providing Credit for this Party
    Logo_Image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    }, //The Logo of the Customer
    LogoImage_Indicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    }, //"T" if Image exists else "F"
    Theme: {
      type: DataTypes.STRING(15),
      allowNull: true,
    }, //The Colour Theme for the Customer
    Background_Image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    }, //Background Image for the customer
    BackgroundImage_Indicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    }, //"T" if Image exists  else "F"
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);  