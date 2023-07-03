import find from '../models/findAll';
import { IncomingMessage, ServerResponse } from 'http';

const getUsers = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const users = await find();

    res.writeHead(200, { 'Content-Type': 'application/json' })
      .end(JSON.stringify(users));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'plain/text' })
      .end('Something went wrong from the server');
  }
};
export default getUsers;
