import users from '../database/users';

const deleteById = (id: string) => {
  return new Promise((resolve) => {
    const index = users.findIndex((userToFind) => userToFind.id === id);
    users.splice(index, 1);
    resolve('');
  });
};
export default deleteById;