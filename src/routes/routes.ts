import users from '../database/users';
import { Routes } from '../types/Routes';

const routes: Routes = {
  '/': {
    'GET': (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
        .end('What are you waiting for? Choose a route!');
    },
  },
  '/api/users': {
    'GET': (req, res) => {
      res.writeHead(200, { 'Content-Type': 'application/json' })
        .end(JSON.stringify(users));
    },
  },
};
export default routes;
