import find from '../models/model';
import { IncomingMessage, ServerResponse } from 'http';

const getUsers = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const users = await find();

    res.writeHead(200, { 'Content-Type': 'application/json' })
      .end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
};
export default getUsers;
