import findById from '../models/findById';
import deleteById from '../models/deleteById';
import { IncomingMessage, ServerResponse } from 'http';

const deleteUser = async (req: IncomingMessage, res: ServerResponse, id: string) => {
  try {
    const user = await findById(id);

    if (user) {
      await deleteById(id);
      res.writeHead(200, { 'Content-Type': 'plain/text' })
        .end(`User #${id} deleted`);
    } else {
      res.writeHead(404, { 'Content-Type': 'plain/text' })
        .end('No such user! 😠');
    }

  } catch {
    res.writeHead(500, { 'Content-Type': 'plain/text' })
      .end('Something went wrong from the server 🤔');
  }
};
export default deleteUser;
