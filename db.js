const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", // Replace with your PostgreSQL username
  host: "localhost",
  database: "testdb",
  password: "test", // Replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;
