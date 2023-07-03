import dotenv from 'dotenv';
dotenv.config();
import process from 'process';
import { createServer } from 'node:http';
import routes from './routes/routes';

const port = process.env.PORT;

const app = createServer((req, res) => {
  const { url, method } = req;

  const routeHandler = routes[url!];

  if (routeHandler && method === 'GET') {
    routeHandler(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found! 😭');
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
