import connection from './connection.model.js';

const getAllModel = async () => {
  const [posts] = await connection.execute('SELECT * FROM article');
  return posts;
};

export default getAllModel;