import db from '../utils/db'

function insere(obj, callback) {
    db.pesssoasDB.insert(obj, callback);

}

function lista(params, callback) {
    db.pesssoasDB.find({}, callback);
    
}

function altera() {

}

function exclui() {

}

export default {
    insere,
    lista,
    altera,
    exclui
}