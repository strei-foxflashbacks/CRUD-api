import users from '../database/users';

const findAll = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};
export default findAll;
