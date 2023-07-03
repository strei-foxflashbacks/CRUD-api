import users from '../database/users';

const find = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};
export default find;
