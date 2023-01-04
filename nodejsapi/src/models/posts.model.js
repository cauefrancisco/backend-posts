import connection from './connection.model.js';

const getAllModel = async () => {
  const [posts] = await connection.execute('SELECT * FROM article');
  return posts;
};

const createArticleModel = async (article) => {

  const { title, subTitle, bodyContent, tag, image} = article;
  const dateUtc = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO article(title, subTitle, bodyContent, postStatus, tag, description, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const createArticle = await connection.execute(query, [title, subTitle, bodyContent, '', tag, '', image]);
  
  return createArticle;
}

const models = {getAllModel, createArticleModel};

export default models;