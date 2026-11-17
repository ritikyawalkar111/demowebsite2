const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

// Request handler (used by both local server and Vercel)
function handler(req, res) {
  fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end("Server error");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

module.exports = handler;

// Start a normal server only when run with "npm start" / "node server.js"
if (require.main === module) {
  http.createServer(handler).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
