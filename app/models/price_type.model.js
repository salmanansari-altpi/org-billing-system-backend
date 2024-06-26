import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const price_type = connection.define(
    "price_type",
    {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        price_type_code: {
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
