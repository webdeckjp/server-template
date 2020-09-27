const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// const https = require("https")

const app = express();

//https.get('https://')

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //res.write(), res.send()
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
