import 'dotenv/config'
import express from 'express';
import  { Pool } from 'pg';

console.log(process.env) // remove this

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const app = express();
app.use(express.json());

// Manufacturer Routes
app.get('/manufacturers', (req, res) => {
    // TODO: Retrieve all manufacturers
    res.json({message: 'ok', test: process.env.DB_USER})
});

app.post('/manufacturers', (req, res) => {
    // TODO: Create a new manufacturer
    res.json({message: 'ok'})
});

// Equipment Routes
app.get('/equipment', (req, res) => {
    // TODO: Retrieve all equipment
    res.json({message: 'ok'})
});

app.post('/equipment', (req, res) => {
    // TODO: Create new equipment
    res.json({message: 'ok'})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
