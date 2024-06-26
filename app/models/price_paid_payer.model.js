import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const price_paid_payer = connection.define(
    "price_paid_payer",
    {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        payer_code: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        // Freeze Table Name
        freezeTableName: true,
        timestamps: true,
    }
);
