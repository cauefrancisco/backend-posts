import cors from 'cors';
import express from "express";
import router from './router.js';

const app = express();
app.use(cors({ origin: '*' })); 
app.use(express.json()); // para api conseguir trabalhar com dados em json
app.use(router); // usar router p requisições e rotas

// app.get('/', (req, res) => { res.send( {message: 'UP' })});



export default app;