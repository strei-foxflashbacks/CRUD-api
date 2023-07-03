import dotenv from 'dotenv';
dotenv.config();
import process from 'process';
import { createServer } from 'node:http';
import routes from './routes/routes';

const port = process.env.PORT;

const app = createServer((req, res) => {
  const { url, method } = req;

  const route = routes[url!];

  if (route) {
    const routeHandler = route[method!];

    if (routeHandler) {
      routeHandler(req, res);
    } else {
      res.statusCode = 405;
      res.setHeader('Allow', Object.keys(route).join(', '));
      res.setHeader('Content-Type', 'text/plain');
      res.end('Method Not Allowed! 😠');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found! 😭');
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
