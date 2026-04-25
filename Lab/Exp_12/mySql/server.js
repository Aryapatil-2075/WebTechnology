const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "studentdb",
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

// CREATE - Add Student
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  const sql = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";
  db.query(sql, [name, age, course], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Student added successfully");
    }
  });
});

// READ - Get All Students
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// UPDATE - Update Student
app.put("/students/:id", (req, res) => {
  const { name, age, course } = req.body;
  const { id } = req.params;

  const sql = "UPDATE students SET name=?, age=?, course=? WHERE id=?";
  db.query(sql, [name, age, course, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Student updated successfully");
    }
  });
});

// DELETE - Delete Student
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM students WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Student deleted successfully");
    }
  });
});

// Server Start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
