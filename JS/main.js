// js/main.js

function handleLogin(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    const email = document.getElementById('email').value;
    
    if (email.endsWith('@zucchetti.com')) {
      window.location.href = 'dashboard.html';
    } else {
      window.location.href = 'dashboard_cliente.html';
    }
  }
  

