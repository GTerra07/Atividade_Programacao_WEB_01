// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/Atividade6/views'));

app.get('/', (req, res) => {
  res.render('index'); 
});

app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, data } = req.body;

  
  if (!nome || !endereco || !telefone || !data) {
    res.render('erro'); 
  } else {
    
    res.render('dados', { nome, endereco, telefone, data });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
