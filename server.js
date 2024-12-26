// Importando dependências
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para processar dados JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para processar o corpo dos dados do formulário
app.use(bodyParser.json());

// Servindo os arquivos estáticos (como o HTML e CSS) na pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Dados fictícios para validação do login
const users = {
  'admin': '1234',
  'user': 'password'
};

// Rota para processar o login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verificar as credenciais
  if (users[username] && users[username] === password) {
    return res.json({ success: true, message: 'Login bem-sucedido!' });
  } else {
    return res.json({ success: false, message: 'Usuário ou senha inválidos.' });
  }
});

// Rota principal (caso o usuário acesse diretamente o servidor)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
