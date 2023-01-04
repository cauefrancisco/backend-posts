import models from './../models/posts.model.js';

 const getAll = async (req, res) => {

  const posts = await models.getAllModel(); // trazer dados do Banco e armazenar aqui no getAll

  return res.status(200).json(posts);
};

const createArticle = async (req, res) => {

  const createdArticle = await models.createArticleModel(req.body);
  
  return res.status(201).json(createdArticle);

};

const methods = {getAll, createArticle};

export default methods;