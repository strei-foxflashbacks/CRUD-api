import findById from '../models/findById';
import { IncomingMessage, ServerResponse } from 'http';

const getUser = async (req: IncomingMessage, res: ServerResponse, id: string) => {
  try {
    const user = await findById(id);

    if (user) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
        .end(JSON.stringify(user));
    } else {
      res.writeHead(400, { 'Content-Type': 'plain/text' })
        .end('No such user! 😠');
    }

  } catch {
    res.writeHead(500, { 'Content-Type': 'plain/text' })
      .end('Something went wrong from the server 🤔');
  }
};
export default getUser;
