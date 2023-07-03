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
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
      .end('What are you waiting for? Choose a route!');
  }
  if (url === '/api/users' && method === 'GET') {
    getUsers(req, res);
  } else if (url?.match(UUIDReg) && method === 'GET'
  ) {
    const id = url.split('/')[3];
    getUser(req, res, id);
  } else if (url === '/api/users' && method === 'POST') {
    createUser(req, res);
  } else if (url?.match(UUIDReg) && method === 'PUT'
  ) {
    const id = url.split('/')[3];
    updateUser(req, res, id);
  } else if (url?.match(UUIDReg) && method === 'DELETE'
  ) {
    const id = url.split('/')[3];
    deleteUser(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
      .end('Not Found! 😭');
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
