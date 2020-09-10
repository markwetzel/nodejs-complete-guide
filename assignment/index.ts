import http = require('http');
import requestListener = require('./routes');

const PORT = 5000;

const listeningListener = (): void => {
  console.log(`Server listening on port ${PORT}`);
};

const server = http.createServer(requestListener);
server.listen(PORT, listeningListener);
