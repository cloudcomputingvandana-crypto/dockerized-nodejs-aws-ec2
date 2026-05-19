const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from Docker on EC2 🚀");
});

server.listen(3000);
