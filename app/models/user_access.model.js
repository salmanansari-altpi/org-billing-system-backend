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
        allowNull: true
    },
    party_type: {
        type: DataTypes.STRING(4),
        allowNull: true
    },
    user_type: {
        type: DataTypes.STRING(6),
        allowNull: true
    },
    role: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    access_code: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    parental_access: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    principal_access: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    no_of_nodes: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    api_name: {
        type: DataTypes.STRING(45),
        allowNull: true
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
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
});