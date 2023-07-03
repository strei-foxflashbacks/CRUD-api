import users from '../database/users';
import { User } from '../types/User';
import { v4 } from 'uuid';

const createNew = (user: User) => {
  return new Promise((resolve) => {
    const newUser = { id: v4(), ...user };
    users.push(newUser);
    resolve(newUser);
  });
};
export default createNew;
