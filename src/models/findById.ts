import users from '../database/users';
import { User } from '../types/User';

const findById = (id: string): Promise<User> => {
  return new Promise((resolve) => {
    const user = users.find((userToFind) => userToFind.id === id);
    resolve(user!);
  });
};
export default findById;
