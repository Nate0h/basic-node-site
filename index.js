const express = require("express");
const app = express();
const router = express.Router();
const port = 8000;
const fs = require("fs");
const url = require("url");

/*app.get("/index", function (req, res) {
  res.send("Hello Worssld!");
});*/

/*app.get("/index", function (req, res) {
  q = url.parse(req.url, true);
  console.log(req.url);
  let filename = "." + req.url + ".html";
  if (req.url == "/") {
    filename = "./index.html";
  }
  console.log(filename);
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});*/

app.get("/index", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact-me", (req, res, next) => {
  res.sendFile(__dirname + "/contact-me.html");
});

const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    error: 404,
    message: "Route not found.",
  });
};
app.use(notFoundHandler);

app.listen(port, function () {
  console.log(`App listening on port: ${port}`);
});

// Create a local server to receive data from
/*const server = http.createServer((req, res) => {
  q = url.parse(req.url, true);
  console.log(req.url);
  let filename = "." + req.url + ".html";
  if (req.url == "/") {
    filename = "./index.html";
  }
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(8000);*/
