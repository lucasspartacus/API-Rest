import express from 'express'
import pessoasModel from '../models/pessoas-model';
import { validate } from 'jsonschema';
import { pessoaSchema } from '../models/schema';

const pessoaRouter = express.Router();

//pessoaRouter.use('/',  (req, res, next) => res.send('ENDPOINT PESSOAS'));
pessoaRouter.get('/', listaPessoas);
pessoaRouter.post('/', inserePessoas);

function listaPessoas(req, res, next ) {
    pessoasModel.lista({}, (err, lista) =>{
        if (!err) {
            res.json(lista);
        }else{
            res.status(400).send(err.message);
        }
    });
}

function inserePessoas(req, res, next ) {
    //Validação do Json recebido
    var result = validate (req.body, pessoaSchema);

    if (result.errors.length >0) {
        res.status(400).send('Erro no formato do objeto do JSON');
    }else{
        pessoasModel.insere(req.body, (err, objNovo)  =>{
            if (!err) {
                res.json(objNovo);
            }else{
                res.status(400).send(err.message);
            }
        });
    }
     
    
}

export default pessoaRouter;