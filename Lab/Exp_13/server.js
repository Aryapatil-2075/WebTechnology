const webSocket = require("ws");
const wss = new webSocket.Server({ port: 3000 });

console.log("WebSocket Server running on ws://localhost:3000");

wss.on("connection", function connection(ws) {
  console.log("New Client is Connected :)");
  ws.send("Welcome to WebSocket Server !!!");
  ws.on("message", function incoming(message) {
    console.log("Received ", message.toString());
    wss.clients.forEach(function each(client) {
      if (client.readyState === webSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
  ws.on("close", () => {
    console.log("Client is Disconnected :(");
  });
});
