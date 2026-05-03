const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "customerdb",
});
db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

app.post("/addCustomer", (req, res) => {
  const { name, email, phone } = req.body;
  db.query(
    "Insert into customers (name,email,phone) values (?,?,?)",
    [name, email, phone],
    (err, result) => {
      if (err) {
        res.send("Student not inserted ");
      } else {
        res.send("Student Inserted Successfully");
      }
    },
  );
});

app.get("/getAllCustomer", (req, res) => {
  db.query("Select * from customers", (err, result) => {
    if (err) {
      res.send("Customer not get");
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

app.put("/customers/:id", (req, res) => {
  const { id } = req.params.id;
  const { name, email, phone } = req.body;

  db.query(
    "update customers set name=?,email=?,phone=? where id=?",
    [name, email, phone],
    (err, result) => {
      if (err) {
        res.send("Customer not updated");
      } else {
        res.send("Customer Updated Successfully");
      }
    },
  );
});

app.delete("/customers/:id", (req, res) => {
  const id = req.params.id;

  db.query("Delete from customers where id=?", [id], (err, result) => {
    if (err) {
      res.send("Customers not deleted");
    } else res.send("Customer deleted Successfully");
  });
});

app.listen(3000, () => {});
console.log("Server Started on port http://localhost:3000");
