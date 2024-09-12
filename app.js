document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

      
        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

    
        alert('Cadastro realizado com sucesso!');
    });
});