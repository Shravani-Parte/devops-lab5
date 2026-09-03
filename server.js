const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("DevOps Lab 5 - Working!");
}).listen(3000);