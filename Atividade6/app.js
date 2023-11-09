// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // ou a porta desejada

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rota principal que renderiza o formulário
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Rota para receber os dados do formulário
app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, data } = req.body;

  // Verifica se algum campo está vazio
  if (!nome || !endereco || !telefone || !data) {
    res.sendFile(__dirname + '/views/erro.html');
  } else {
    // Renderiza a página com os dados
    res.render('dados', { nome, endereco, telefone, data });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
