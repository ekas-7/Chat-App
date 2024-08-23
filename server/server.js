require('dotenv').config(); // Load environment variables first
const express = require('express');
const cors = require('cors');
const { dbconnect } = require('./database/db'); // Import the dbconnect function from db.js
const getUsersRouter = require('./routes/getUsersRouter');

const app = express();
const port = process.env.PORT || 3000;

// Start server after DB connection is established
dbconnect().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Routes
app.use('/api/getUsers', getUsersRouter);
