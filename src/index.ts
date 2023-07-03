import dotenv from 'dotenv';
dotenv.config();
import process from 'process';
import { createServer } from 'node:http';
import getUsers from './controllers/getUsers';
import getUser from './controllers/getUser';
import createUser from './controllers/createUser';
import updateUser from './controllers/updateUser';
import deleteUser from './controllers/deleteUser';

const port = process.env.PORT;
const UUIDReg = new RegExp(/\/api\/users\/[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}/);

const app = createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
      .end('What are you waiting for? Choose a route!');
  }
  if (req.url === '/api/users' && req.method === 'GET') {
    getUsers(req, res);
  } else if (req.url?.match(UUIDReg) && req.method === 'GET'
  ) {
    const id = req.url.split('/')[3];
    getUser(req, res, id);
  } else if (req.url === '/api/users' && req.method === 'POST') {
    createUser(req, res);
  } else if (req.url?.match(UUIDReg) && req.method === 'PUT'
  ) {
    const id = req.url.split('/')[3];
    updateUser(req, res, id);
  } else if (req.url?.match(UUIDReg) && req.method === 'DELETE'
  ) {
    const id = req.url.split('/')[3];
    deleteUser(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
      .end('Not Found! 😭');
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
