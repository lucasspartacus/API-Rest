import http from 'http';
import express from  'express';
import apiRouter from './api-v1/api-router';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json()); // Associar o json ao objeto req.body
app.use(bodyParser.urlencoded({extended: false}));  // Associar os parametros de URL e body com formato urlEncoded

app.use('/', apiRouter);

const porta = 5500;
http.createServer(app).listen(porta, () => console.log(`Servidor pronto na porta ${porta}`));