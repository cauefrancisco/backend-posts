import models from './../models/posts.model.js';

 const getAll = async (req, res) => {

  const posts = await models.getAllModel(); // trazer dados do Banco e armazenar aqui no getAll

  return res.status(200).json(posts);
};

const createArticle = async (req, res) => {

  const createdArticle = await models.createArticleModel(req.body);
  
  return res.status(201).json(createdArticle);

};

const deleteArticle = async  (req, res) => {

  const { id } = req.params;
  
  await models.deleteArticleModel(id);

  return res.status(204).json();

}

const updateArticle = async (req, res) => {

  const { id } = req.params;

  await models.updateArticleModel(id, req.body);

  return res.status(204).json();


}

const methods = {getAll, createArticle, deleteArticle, updateArticle};

export default methods;