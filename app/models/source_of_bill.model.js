import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const source_of_bill = connection.define('source_of_bill', {
    source_of_bill_id: {
        type: DataTypes.INTEGER(3),
        primaryKey: true,
        autoIncrement: true
    },
    source_of_bill_code: {
        type: DataTypes.STRING(6),
        allowNull: true
    },
    source_of_bill_description: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
}, {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
});