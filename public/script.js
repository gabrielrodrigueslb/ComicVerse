
let formularioLogin = document.getElementById('entrar')
let formularioCadastrar = document.getElementById('cadastrar')

  function criarConta() {
    formularioLogin.classList.add('hidden')
    formularioCadastrar.classList.remove('hidden')
  }

  function Entrar() {
    formularioLogin.classList.remove('hidden')
    formularioCadastrar.classList.add('hidden')
  }





document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Impede o envio tradicional do formulário

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Envia os dados para o backend usando fetch
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();

    const messageElement = document.getElementById('responseMessage');
    if (data.success) {
      messageElement.style.color = 'green';
      messageElement.textContent = data.message;
    } else {
      messageElement.style.color = 'red';
      messageElement.textContent = data.message;
    }
  } catch (error) {
    console.error('Erro:', error);
    const messageElement = document.getElementById('responseMessage');
    messageElement.style.color = 'red';
    messageElement.textContent = 'Erro ao tentar se conectar com o servidor.';
  }
});