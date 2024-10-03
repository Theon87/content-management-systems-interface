// DEPENDENCIES
import express from 'express';


// INTERFACES

// DATA
const PORT = process.env.PORT || 3001;
const app = express();

// APP/PORTS

// MIDDLEWARE

// ROUTES

// START THE SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});