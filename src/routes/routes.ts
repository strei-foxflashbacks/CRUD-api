import { Routes } from '../types/Routes';

const routes: Routes = {
  '/': {
    'GET': (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('What are you waiting for? Choose a route!');
    },
  },
};
export default routes;
