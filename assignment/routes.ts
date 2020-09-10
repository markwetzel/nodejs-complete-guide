import http = require('http');

const users = [];

const requestListener = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const { method, url } = req;

  let bodyContent: string;

  if (method === 'POST') {
    if (url === '/create-user') {
      const chunkBody = [];
      if (method === 'POST') {
        // Access user-submitted content with Node
        // Data comes in as chunks
        // Build a body array with those chunks to be converted to readable format later
        req.on('data', (chunk) => {
          console.log({ chunk });
          chunkBody.push(chunk);
        });

        // 'end' signals the completion of data transfer
        req.on('end', () => {
          console.log(chunkBody);
          // Convert chunk array to usable data

          const dataContents = Buffer.concat(chunkBody).toString();
          const username = dataContents.split('=')[1];
          console.log({ dataContents });
          console.log({ username });

          // Redirect back to users
          // 302 = redirection - found
          res.statusCode = 302;
          res.setHeader('Location', '/users');

          users.push(username);

          console.log({ users });

          return res.end();
        });
      }
    }
  } else if (method === 'GET') {
    switch (url) {
      case '/':
        bodyContent = 'Welcome to the server, user.';
        break;
      case '/users':
        bodyContent = `
        <ul>
          <li>Mark</li>
          <li>Dan</li>
          <li>Matt</li>
        </ul>

        <form action="/create-user" method="POST">
          <input name="username" placeholder="Username" type="text" />
          <button type="submit">Add User</button>
        </form>
      `;

        break;
      default:
        bodyContent = '404';
        break;
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Anonymous Server</title>
        </head>
        <body>
          ${bodyContent}
        </body>
      </html>
    `);

    return res.end();
  }
};

module.exports = requestListener;
