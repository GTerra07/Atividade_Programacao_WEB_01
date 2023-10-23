const express = require('express');
const app = express();
const path = require('path');

// Configurar o mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar o middleware para análise de formulários
app.use(express.urlencoded({ extended: true }));

// Rota raiz que renderiza o formulário
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para lidar com os dados do formulário
app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, data } = req.body;
  res.render('dados', { nome, endereco, telefone, data });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
