// Import the required libraries
const express = require("express");
const app = express();

// Set the port to listen on
const port = process.env.PORT || 3000;

// Create the /say endpoint
app.get("/say", (req, res) => {
    const keyword = req.query.keyword || "Sai Adhithi";
    const responseMessage = `${keyword} says Hello`;
    res.json({ message: responseMessage });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${3000}`);
});

