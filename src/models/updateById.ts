import users from '../database/users';
import { User } from '../types/User';

const updateById = (id:string, user: User) => {
  return new Promise((resolve) => {
    const index = users.findIndex((userToFind) => userToFind.id === id);
    users[index] = { id, ...user };
    const updatedUser = users[index];

    resolve(updatedUser);
  });
};
export default updateById;
