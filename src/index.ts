import dotenv from 'dotenv';
dotenv.config();
import process from 'process';

const port = process.env.PORT;

console.log('Kekus!', `port = ${port}`);