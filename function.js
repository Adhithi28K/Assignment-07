import express from 'express'; // Import express

const app = express();

app.get('/say', (req, res) => {
    // Parse the query parameters
    const searchParams = new URLSearchParams(req.url.split('?')[1]);
    const name = searchParams.get('keyword');

    // Use the built-in fetch API
    fetch(`https://namehello-bdenc8gyghfrf6gd.canadacentral-01.azurewebsites.net/say?keyword=${name}`)
    .then(response => response.json())
    .then(data => {
        // Send the response from the fetched API
        res.send(data.message);
    })
    .catch(error => {
        // Handle any errors in the fetch request
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    });
});