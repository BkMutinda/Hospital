const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express(); //  Initialize Express first

app.use(cors()); //  Enable CORS
app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); // Optional if using forms with URL encoding

//  MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ben@sql.3612",
  database: "Hospital",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to the database:", err);
    return;
  }
  console.log(" Connected to MySQL database.");
});

//  POST route to receive form data
app.post("/submit", (req, res) => {
  const { first_name, last_name, email, id_number } = req.body;

  // Optional: Validation
  if (!first_name || !last_name || !email || !id_number) {
    return res.status(400).json({ error: "Some fields are missing." });
  }

  //  Corrected SQL query (only 4 values)
  const query = "INSERT INTO PATIENT (first_name, last_name, id_number, email) VALUES (?, ?, ?, ?)";

  db.query(query, [first_name, last_name, id_number, email], (err, result) => {
    if (err) {
      console.error("❌ Error inserting into database:", err);
      return res.status(500).send("Failed to save data.");
    }

    console.log(" Data inserted successfully.");
    res.status(200).send("Data saved successfully");
  });
});

//  Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
