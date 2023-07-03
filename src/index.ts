import dotenv from 'dotenv';
dotenv.config();
import process from 'process';
import { createServer } from 'node:http';
import routes from './routes/routes';
import { RequestParams } from './types/RequestParams';

const port = process.env.PORT;

const app = createServer((req: RequestParams, res) => {
  const { url, method } = req;

  const route = routes[url!];

  if (route) {
    const routeHandler = route[method!];

    if (routeHandler) {
      routeHandler(req, res);
    } else {
      res.writeHead(405, {
        'Allow': Object.keys(route).join(', '),
        'Content-Type':  'text/plain',
      })
        .end('Method Not Allowed! 😠');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
      .end('Not Found! 😭');
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
