const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '',
  database: 'reactdb'
});

app.get('/user', (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching user" });
    }
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});









