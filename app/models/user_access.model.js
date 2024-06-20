import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const user_access = connection.define('user_access', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    party_code: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    party_type: {
        type: DataTypes.STRING(4),
        allowNull: false
    },
    user_type: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    access_code: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    parental_access: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    principal_access: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    no_of_nodes: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    api_name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    param1: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    param2: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    param3: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    param4: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    param5: {
        type: DataTypes.STRING(45),
        allowNull: true
    },

}, {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
});