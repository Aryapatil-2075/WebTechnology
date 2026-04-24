const express = require("express");
const app = express();
const port = 4000;

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

app.get("/home", (req, res) => {
  res.send("Hello from Home Page");
});

app.get("/shorts", (req, res) => {
  res.send("Hello from Shorts Page");
});

app.get("/Subscription", (req, res) => {
  res.send("Hello from Subscription Page");
});

app.get("/you", (req, res) => {
  res.send("Hello from You Page");
});

app.listen(port, () => {
  console.log(`Server Starting at http://localhost:${port}`);
});
