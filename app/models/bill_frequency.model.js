import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export  const biller_frequency=connection.define(
"biller_frequency",
{
    bill_freq_id:{
        type: DataTypes.INTEGER(2),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    frequency_code:{
        type:DataTypes.STRING(6),
        allowNull:false,
    },
    frequency_description:{
        type:DataTypes.STRING(20),
        allowNull:false,
    }
}
)