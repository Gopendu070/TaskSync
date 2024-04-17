

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser'); // Added for parsing request body

const app = express();
app.use(cors()); // Allow CORS for development (adjust for production)

// Replace with your actual database credentials (avoid storing directly in code)
const dbConfig = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reactdb"
});

// Parse incoming request body as JSON
app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.json("From Backend Side");
});

app.post('/user', (req, res) => {
  const { Name, UserID, Password } = req.body; // Destructure data from request body

  // Validate data before inserting (optional, implement as needed)

  const sql = `INSERT INTO user (Name, UserID, Password) VALUES (?, ?, ?)`;
  const values = [Name, UserID, Password];

  dbConfig.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error inserting data" }); // Handle errors appropriately
    }

    return res.json({ message: "Data inserted successfully" });
  });
});

app.listen(8082, () => {
  console.log("listening on port 8082");
});
