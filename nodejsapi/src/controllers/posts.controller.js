import getAllModel from './../models/posts.model.js';

 const getAll = async (req, res) => {

  const posts = await getAllModel(); // trazer dados do Banco e armazenar aqui no getAll

  return res.status(200).json(posts);
};

export default getAll;