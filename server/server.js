const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(' backend is running!');
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
