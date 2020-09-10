import * as fs from 'fs';
import * as http from 'http';

const requestHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const { url } = req;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter your message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('testMessage.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  } else {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('suppp');
    res.end();
  }
};

module.exports = requestHandler;
