//linha 1-12 iniciando servidor
const express = require('express');
const cors = require('cors');

const router = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// const porta = process.env.PORT || 3333;
const porta = 3333;

app.listen(porta, () => {
    console.log('Servidor iniciado na porta ' + porta);
    // ou console.log('Servidor iniciado na porta ${porta}');
});

//request(vem do front) response (vai pro front)
app.get('/', (request, response) => {
    response.send('Hello World')
})