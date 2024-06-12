import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const connection = new Sequelize(
  process.env.Workspace_DB_RDS_NAME,
  process.env.Workspace_DB_RDS_USER,
  process.env.Workspace_DB_RDS_PASS,
  {
    host: process.env.Workspace_DB_RDS_HOST,
    dialect: process.env.Workspace_DB_DIALECT,
    dialectOptions: {
      useUTC: false,
      raw: true,
      underscored: true, // If your column names in the database are in snake_case, set this to true
    },
    timezone: "+05:30",
    loggin: false,
  }
);
// const sequelize = new Sequelize(
//     process.env.DB_LOCAL_NAME,
//     process.env.DB_LOCAL_USER,
//     process.env.DB_LOCAL_PASS,
//      {
//        host: process.env.DB_LOCAL_HOST,
//        dialect: process.env.DB_DIALECT,
//        dialectOptions:{
//            useUTC:false,
//        },
//        timezone:'+05:30'
//      }
//    );

//Test Connection
//Test Connection
connection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
