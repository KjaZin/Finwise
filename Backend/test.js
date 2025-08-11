import sequelize from "./src/config/database.js";

console.log("DB test: starting...");

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('DB test: connection established successfully.');
  } catch (error) {
    console.error('DB test: unable to connect to the database:', error);
    throw error;
  } finally {
    try {
      await sequelize.close();
      console.log('DB test: connection closed.');
    } catch (closeErr) {
      console.error('DB test: error while closing connection:', closeErr);
    }
  }
}

// Run and ensure the process exits (0 on success, 1 on failure)
(testDatabaseConnection())
  .then(() => process.exit(0))
  .catch(() => process.exit(1));