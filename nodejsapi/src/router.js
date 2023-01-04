import express from "express";
import getAll from "./controllers/posts.controller.js";

const router = express.Router();

//.get('/', ()=>{})\

router.get('/posts', getAll);

export default router;