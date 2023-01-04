import express from "express";
import methods from "./controllers/posts.controller.js";
import middleware from './middlewares/posts.middleware.js';

const router = express.Router();

//.get('/', ()=>{})\

router.get('/posts', methods.getAll);
router.post('/posts', middleware.validateBody, methods.createArticle);
router.delete('/posts/:id', methods.deleteArticle);
router.put('/posts/:id', methods.updateArticle);

export default router;