const express = require('express');
const app = express();

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, vaaaarey');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

