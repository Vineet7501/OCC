//Using Get Method
const express = require("express");
const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, resp) => {
  resp.setHeader("Content-Type", "text/html");
  resp.sendFile(__dirname + "/index.html");
});

server.get("/welcome", (req, resp) => {
  resp.setHeader("Content-Type", "text/html");
  resp.sendFile(__dirname + "/welcome.html");
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const city = req.query.city;

  console.log("GET First Name :" + firstName);
  console.log("GET First Name :" + lastName);
  console.log("GET First Name :" + city);
});

server.listen(port, () => {
  console.log(`http://localhost:${port} started `);
});