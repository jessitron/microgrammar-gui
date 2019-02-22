// server.js

// init project
import express from "express";
import { AddressInfo } from "net";

const app = express();
// http://expressjs.com/en/starter/static-files.html
app.use(express.static("static"));
app.use(express.static("public"));

app.use(express.json()); // do things right

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/app/index.html");
});

// listen for requests :)
const listener = app.listen(5000, () => {
  console.log("Your app is listening on port " + (listener.address() as AddressInfo).port);
});
