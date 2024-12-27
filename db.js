const { Pool } = require("pg");

const pool = new Pool({
  user: "bhavesh", // Replace with your PostgreSQL username
  host: "dpg-ctn8pq3v2p9s73fhljtg-a",
  database: "testdb_9xgp",
  password: "MNv7jRj8LIcckFXmcd3vshZMONviJPKD", // Replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;
