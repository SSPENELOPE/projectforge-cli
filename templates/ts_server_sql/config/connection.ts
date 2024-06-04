import { Sequelize } from "sequelize";
import mysql from "mysql2/promise";

require("dotenv").config();

const user = process.env.DB_USER
const port = 3306
const host = "localhost"
const password = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

let sequelize: any;


// Check if the app is running in a production environment (Heroku)
// This is prepped and ready to use JAWSDB via Heroku,
// you will need to pass this envrionment variable in your heroku configs as well as all other environment variables you have in your app
// Check JawsDB here https://elements.heroku.com/addons/jawsdb

async function initalizeDB() {
    const connection = await mysql.createConnection({ host, port, user , password });
    console.log("Created Connection")

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
    console.log("New DB Created!")
}
  if (process.env.NODE_ENV === "production") {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    // Use local development configuration, You need to congfigure this in your .env folder!
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );
  }

initalizeDB();

export default sequelize;
