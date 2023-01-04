import dotenv from "dotenv";
import mysqlPromise from "mysql2/promise.js";

dotenv.config();

const connection = mysqlPromise.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});




export default connection;