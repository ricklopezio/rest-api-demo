const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// PostgreSQL pool configuration
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const executeSQLFile = async (filePath) => {
    try {
        const script = fs.readFileSync(filePath, { encoding: 'utf-8' });
        await pool.query(script);
        console.log(`Executed script: ${filePath}`);
    } catch (err) {
        console.error(`Error executing script ${filePath}:`, err);
    }
};

const setupDatabase = async () => {
    try {
        // Paths to SQL files
        const manufacturerPath = path.join(__dirname, 'manufacturer.sql');
        const equipmentPath = path.join(__dirname, 'equipment.sql');

        // Execute SQL files
        await executeSQLFile(manufacturerPath);
        await executeSQLFile(equipmentPath);

        console.log('Database setup complete.');
    } catch (err) {
        console.error('Error setting up the database:', err);
    } finally {
        await pool.end(); // Close the pool connection
    }
};

setupDatabase();
