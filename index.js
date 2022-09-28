const http = require("http");

function requestListener(req, res) {
  // This server will respond to all requests (regardless of path) with "hello world"
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello world");

  // Put a message in the logs as well unless that's been disabled:
  if (process.env.NO_DEBUG) {
    return;
  }

  console.log(`Requested ${req.url}`);
}

const server = http.createServer(requestListener);

const host = process.env.HOST ?? "0.0.0.0";
const port = process.env.PORT ?? 4000;
server.listen(port, host, () => {
  console.log(`Server is now listening on http://${host}:${port}`);
});
