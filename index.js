const http = require("http");
const fs = require("fs");
const url = require("url");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
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

server.listen(8000);
