const express = require("express");
const app = express();
const port = 4000;

const users = [
  { id: 1, name: "Arya", age: 20, class: "AIML" },
  { id: 2, name: "Shruthi", age: 21, class: "ENTC" },
  { id: 3, name: "Rohan", age: 25, class: "Pharmacy" },
  { id: 4, name: "Sandhya", age: 45, class: "BCOM" },
  { id: 6, name: "Bharat", age: 46, class: "PHD" },
];

app.get("/user", (req, res) => {
  res.json(users);
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;

  const users1 = users.find((u) => u.id == userId);

  if (users1) {
    res.send(users1);
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
