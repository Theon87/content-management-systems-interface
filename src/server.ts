// DEPENDENCIES
import express from 'express';
import { QueryResult } from 'pg';

// INTERFACES

// DATA
import { pool, connectToDb } from './connections.js';
await connectToDb();

// APP/PORTS
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES

// Default response for any other request (Not Found)
app.use("*",(_req, res) => {
    res.status(404).send("Nothing found here.");
    console.log("Working!");
});

// START THE SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});