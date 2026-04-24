// Common types of response obj
// 1) response.send
// 2)response.json-> sends Data
// 3)response.status ->check http status
// 4)response.sendFile

//example of response object
app.get("/", (req, res) => {
  const T = new Date();
  res.json({
    mess: "Hello",
    Time: T,
  });
});
