const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://cerqueira:cerqs1991@cluster0-wc8lt.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Configurar Express para "entender" requisições com JSON em seu corpo
app.use(express.json());
app.use(routes);

app.listen(3333);


/* 
 * Métodos HTTP: GET, POST, PUT, DELETE
 *
 * Tipos de parâmetros:
 * Query Params: request.query (Filtro, ordenação, paginação, ...)
 * Route Params: request.params (Identificar um recurso na alteração ou remoção)
 * Body: request.body (Dados para criação ou alteração de um registro)
 * 
 * MongoDB (Não-relacional)
 * 
 */



