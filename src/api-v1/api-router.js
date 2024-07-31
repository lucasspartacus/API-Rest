import express from 'express'
import pessoaRouter from './paths/pessoas-router';

const apiRouter = express.Router();

apiRouter.use('/pessoas',  pessoaRouter);
apiRouter.use('/',  (req, res, next) => res.send('API V1'));

export default apiRouter;