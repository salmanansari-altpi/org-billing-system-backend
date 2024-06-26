import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const price_list = connection.define(
    "price_list",
    {
        price_list_id: {
            type: DataTypes.INTEGER(16),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        biller_price_type: {
            type: DataTypes.CHAR(1),
            allowNull: false,
        },
        biller_price_amount: {
            type: DataTypes.DECIMAL(19, 3), // Number 16+3
            allowNull: false,
        },
        biller_price_percentage: {
            type: DataTypes.DECIMAL(6, 3), // Number 3+3
            allowNull: false,
        },
        biller_price_biller_agent_share: {
            type: DataTypes.DECIMAL(6, 3), // Number 3+3
            allowNull: false,
        },
        biller_price_consumer_agent_share: {
            type: DataTypes.DECIMAL(6, 3), // Number 3+3
            allowNull: false,
        },
        biller_price_our_share: {
            type: DataTypes.DECIMAL(6, 3), // Number 3+3
            allowNull: false,
        },
        consumer_price_type: {
            type: DataTypes.CHAR(1),
            allowNull: false,
        },
        cust_price_amount: {
            type: DataTypes.DECIMAL(19, 3), // Number 16+3
            allowNull: false,
        },
        cust_price_percentage: {
            type: DataTypes.DECIMAL(6, 3), // Number 3+3
            allowNull: false,
        },
        cust_price_biller_agent_share: {
            type: DataTypes.DECIMAL(6, 3), // Number 3+3
            allowNull: false,
        },
        cust_price_consumer_agent_share: {
            type: DataTypes.DECIMAL(6, 3), // Number 3+3
            allowNull: false,
        },
        cust_price_our_share: {
            type: DataTypes.DECIMAL(6, 3), // Number 3+3
            allowNull: false,
        },
        pricing_from_date:{
            type: DataTypes.DATE,
            allowNull: false,

        },
        pricing_to_date:{
            type: DataTypes.DATE,
            allowNull: false,

        }
    },
    {
        // Freeze Table Name
        freezeTableName: true,
        timestamps: true,
    }
);
