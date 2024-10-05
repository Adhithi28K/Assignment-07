const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to my Netlify-deployed Express app.');
});

// Sample API route
app.get('/api/info', (req, res) => {
  res.json({ message: 'This is a sample API response', timestamp: new Date() });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export the Express API
module.exports = app;
