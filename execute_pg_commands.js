const { Client } = require("pg");

// Database connection settings
const client = new Client({
  user: "postgres", // Replace with your PostgreSQL username
  host: "localhost", // Use the appropriate host (usually localhost)
  password: "test", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

(async () => {
  try {
    // Connect to the PostgreSQL server
    await client.connect();
    console.log("Connected to PostgreSQL server");

    // Step 1: Create the `testdb` database
    await client.query("CREATE DATABASE testdb");
    console.log("Database 'testdb' created successfully");

    // Close the initial connection
    await client.end();

    // Step 2: Connect to the newly created database
    const testdbClient = new Client({
      user: "postgres",
      host: "localhost",
      database: "testdb", // Connect to the `testdb` database
      password: "test",
      port: 5432,
    });

    await testdbClient.connect();
    console.log("Connected to 'testdb' database");

    // Step 3: Create the `users` table
    await testdbClient.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      )
    `);
    console.log("Table 'users' created successfully");

    // Close the connection
    await testdbClient.end();
  } catch (err) {
    console.error("An error occurred:", err.message);
  }
})();
