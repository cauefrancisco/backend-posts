import connection from './connection.model.js';

const getAllModel = async () => {
  const [posts] = await connection.execute('SELECT * FROM article');
  return posts;
};

const createArticleModel = async (article) => {

  const { title, subTitle, bodyContent, tag, image} = article;
  const dateUtc = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO article(title, subTitle, bodyContent, postStatus, tag, description, image, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const createArticle = await connection.execute(query, [title, subTitle, bodyContent, '', tag, '', image, dateUtc]);
  
  return createArticle;
}

const deleteArticleModel = async (id) => {
  const removedArticle = await connection.execute('DELETE FROM article WHERE id = ?', [id]);
  return removedArticle;
};


const updateArticleModel = async (id, article) => {

    const { title, subTitle, bodyContent, postStatus, tag, image} = article;

    const query = 'UPDATE article SET title = ?, subTitle = ?, bodyContent = ?, postStatus = ?, tag = ?, image = ?, date = ? WHERE id = ?';
    const dateUtc = new Date(Date.now()).toUTCString();

    const [updatedArticle] = await connection.execute(query, [title, subTitle, bodyContent, postStatus, tag, image, dateUtc, id]); //finalizar com o restante

    return updatedArticle;

  };

const models = {getAllModel, createArticleModel, deleteArticleModel, updateArticleModel};

export default models;