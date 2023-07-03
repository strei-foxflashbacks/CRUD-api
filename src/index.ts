import dotenv from 'dotenv';
dotenv.config();
import process from 'process';
import { createServer } from 'node:http';
import getUsers from './controllers/databaseController';

const port = process.env.PORT;

const app = createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
      .end('What are you waiting for? Choose a route!');
  }
  if (req.url === '/api/users' && req.method === 'GET') {
    getUsers(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
      .end('Not Found! 😭');
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
