import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const billerDetails = connection.define(
  "Biller_details",
  {
    Biller_Id: {
      type: DataTypes.INTEGER(6),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Biller_Code: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    Customer_Account_No: {
      unique:true,
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    Bill_Date: 
    { type: DataTypes.DATE, 
      allowNull: true },

     Bill_No: {
      type: DataTypes.STRING(30),
      allowNull: true,
    }, 
    Bill_Amount: {
      type: DataTypes.DECIMAL(15,2),
    },
    Consumer_No: {
      type: DataTypes.STRING(20),
      allowNull: true,
    }, 
    Consumer_Name: {
      type: DataTypes.STRING(50),
    },
    Other_Charges: {
      type: DataTypes.DECIMAL(15,2),
    },
    Pending_Due: {
      type: DataTypes.DECIMAL(15,2),
    }, 
    Total_Amount_Due: {
      type: DataTypes.DECIMAL(15,2),
    }, 
    Paid_Amount: {
      type: DataTypes.DECIMAL(15,2),
    },
    Paid_Date: {
      type: DataTypes.DATE,
    }, 
    Paid_Indicator: {
      type: DataTypes.STRING(1),
    }, 
    Bill_Period_From: {
      type: DataTypes.DATE,
    }, 
    Bill_Period_To: {
      type: DataTypes.DATE,
    }, 
    Last_Meter_Reading: {
      type: DataTypes.INTEGER(8),
    }, 
    Reading_Date: {
      type: DataTypes.DATE,
    }, 
    
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);  