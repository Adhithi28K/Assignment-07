// Import the required libraries
const express = require("express");
const app = express();

// Set the port to listen on
const port = process.env.PORT || 3000;

// Create the /say endpoint
app.get("/say", (req, res) => {
    const keyword = req.query.keyword || "Hello";
    const responseMessage = `Sai Adhithi says ${keyword}`;
    res.json({ message: responseMessage });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://137.184.101.63:3000/say?keyword=hello`);
});

