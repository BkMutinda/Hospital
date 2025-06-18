const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt")


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
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to the database:", err);
    return;
  }
  console.log("Successfully Connected to MySQL database.");
});

//  POST route to receive form data

app.post("/submit", async (req, res) => {
  const { first_name, last_name, email, id_number,password } = req.body;

  const hashed_password = await bcrypt.hash(password, 10);

  //  Corrected SQL query (only 4 values)
  const query = "INSERT INTO PATIENT (first_name, last_name, id_number, email, h_password) VALUES ( ?, ?, ?, ?, ?)";

  db.query(query, [first_name, last_name, id_number, email, hashed_password], (err, result) => {
    if (err) {
      console.error("❌ Error inserting into database:", err);
      return res.status(500).send("Failed to save data.");
    }

    console.log(" Data inserted successfully.");
    res.status(200).send("Data saved successfully");
  });
});

app.post("/submit", async (req, res) => {

    const {id_number, password} = req.body;

    const login_query = "SELECT * FROM PATIENT WHERE id_number = ? ";

//quering the database

db.query (login_query, [id_number], (err) =>{
  if (err) {
    console.error(`Failed to get user with ID ${id_number}. Check the input and try again`);
    alert(`Failed to get user with ID ${id_number}. Check the input and try again`);
    return res.status(500).send("Please try again later ! ");
  }

  console.log("Logged in successfull");
  res.status(200).send("All good 💪😂 ")
  
});
});

//  Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
