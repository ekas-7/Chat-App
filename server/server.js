require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Import Firebase configuration
require('./config/firebaseconfig'); // Ensure this is the correct path to your firebase-config.js file

const googleLoginRouter = require("./routes/googleLogin-router");

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/google-login', googleLoginRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
