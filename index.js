const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  const appName = process.env.APP_NAME || null
  res.end(`Hello\n\n${appName ? `App name: ${appName}` : ''}`);
}

const server = http.createServer(requestListener);
server.listen(process.env.APP_PORT || 8080);
