import express from "express";
import methods from "./controllers/posts.controller.js";

const router = express.Router();

//.get('/', ()=>{})\

router.get('/posts', methods.getAll);
router.post('/posts', methods.createArticle);

export default router;