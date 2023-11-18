const express = require('express');
const app = express();
const ip=require("ip")

// Middleware to get the client's IP address
app.use((req, res, next) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  req.clientIp = clientIp;
  next();
});

// Route to display the client's IP address as HTML
app.get('/', (req, res) => {
    const serverIp = ip.address();
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Client IP Address</title>
      </head>
      <body>
        <h1>Your IP Address:</h1>
        <p>${serverIp}</p>
      </body>
    </html>
  `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
