import dotenv from 'dotenv';
dotenv.config();
import process from 'process';
import { createServer } from 'node:http';

const port = process.env.PORT;

const app = createServer((_, res) => {
  res.end('Request accepted');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
