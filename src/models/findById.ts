import users from '../database/users';

const findById = (id: string) => {
  return new Promise((resolve) => {
    const user = users.find((userToFind) => userToFind.id === id);
    resolve(user);
  });
};
export default findById;
