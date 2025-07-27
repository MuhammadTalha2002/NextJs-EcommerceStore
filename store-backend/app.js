// Load environment variables from .env file - MUST BE AT THE VERY TOP
require('dotenv').config();

const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();

const port = process.env.PORT || 4000;
const dbUri = process.env.DB_URI;

console.log(`Database URI: ${dbUri || 'Not set in .env'}`);

// --- CORS Configuration ---
// Allow requests from your Next.js frontend origin
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your Next.js frontend URL
  optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));
// If you want to allow all origins during development (less secure for production):
// app.use(cors());


// --- Middleware (if you plan to handle JSON in requests) ---
app.use(express.json()); // For parsing application/json

// --- API Endpoints ---

// Simple welcome route (you already have this)
app.get('/', (req, res) => {
  res.send(`Hello from Express! Server running on port ${port}`);
});

// New API endpoint for your frontend to fetch data
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Data fetched successfully from Express backend!',
    timestamp: new Date().toISOString(),
    items: [
      { id: 1, name: 'Item A' },
      { id: 2, name: 'Item B' },
      { id: 3, name: 'Item C' }
    ]
  };
  res.json(data); // Send JSON response
});

// Example of a POST endpoint (for sending data from frontend to backend)
app.post('/api/submit', (req, res) => {
  const { name, email } = req.body; // Access data from the request body
  console.log('Received submission:', { name, email });
  // In a real app, you'd save this to the database
  res.json({ status: 'success', receivedData: { name, email } });
});


// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});