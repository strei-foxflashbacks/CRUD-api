import { IncomingMessage, ServerResponse } from 'http';
import createNew from '../models/createNew';

const createUser = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const { username, age, hobbies } = JSON.parse(body);

      const user = {
        username,
        age,
        hobbies,
      };

      const newUser = await createNew(user);
      res.writeHead(201, { 'Content-Type': 'application/json' })
        .end(JSON.stringify(newUser));
    });
  } catch {
    res.writeHead(500, { 'Content-Type': 'plain/text' })
      .end('Something went wrong from the server 🤔');
  }
};
export default createUser;
