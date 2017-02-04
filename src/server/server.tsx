import * as path from 'path';
import * as http from 'http';
import * as Express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

const app: Express.Application = Express();
const server: http.Server = http.createServer(app);

app.use(Express.static(path.join(__dirname, '')));

app.get('*', (req: Express.Request, res: Express.Response) => {
  var app = (
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Alexander Fisher - Portfolio Site</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="/client.js"></script>
    </body>
  </html>
  );

  return res.send(renderToString(app));
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, (err: any) => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});