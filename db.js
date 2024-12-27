const { Pool } = require("pg");
const dotenv = require("dotenv");

// dot env config
dotenv.config();
const pool = new Pool({
  user: process.env.user, // Replace with your PostgreSQL username bhavesh
  host: process.env.host,
  database: process.env.database,
  password: process.env.password, // Replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;
