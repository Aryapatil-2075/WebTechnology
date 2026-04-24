const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const T = new Date();
  res.json({
    message: "hello",
    time: T,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
