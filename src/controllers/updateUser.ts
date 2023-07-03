import { IncomingMessage, ServerResponse } from 'http';
import findById from '../models/findById';
import updateById from '../models/updateById';

const updateUser = async (req: IncomingMessage, res: ServerResponse, id: string) => {
  try {
    const userExists = await findById(id);

    if (userExists) {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', async () => {
        const { username, age, hobbies } = JSON.parse(body);

        const user = {
          username: username || userExists.username,
          age: age || userExists.age,
          hobbies: hobbies || userExists.hobbies,
        };

        const updatedUser = await updateById(id, user);
        res.writeHead(200, { 'Content-Type': 'application/json' })
          .end(JSON.stringify(updatedUser));
      });
    } else {
      res.writeHead(400, { 'Content-Type': 'plain/text' })
        .end('No such user! 😠');
    }
  } catch {
    res.writeHead(500, { 'Content-Type': 'plain/text' })
      .end('Something went wrong from the server 🤔');
  }
};
export default updateUser;
