import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const ui_merchant = connection.define('ui_merchant', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    int_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    integration_code: {
        type: DataTypes.STRING(10),
        allowNull: true,
        unique: true
    },
    header: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    header_attribute: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    main_logo: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
    main_logo_attribute: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    product_logo: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
    product_logo_attribute: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    page_title1: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    page_title1_attribute: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    page_title2: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    page_title2_attribute: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    page_title3: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    page_title3_attribute: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    footer: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    footer_attribute: {
        type: DataTypes.STRING(30),
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