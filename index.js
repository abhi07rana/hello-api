const express = require('express');
const app = express();
const port = 80;

// Create the /sayHello route
app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello User.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
