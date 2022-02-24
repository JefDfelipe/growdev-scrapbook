// Função para ir para tela de cadastro
function onNewAccount() {
    return location.href = 'register.html';
}

// Função para logar
const accountLocalStorage = JSON.parse(localStorage.getItem('accounts'))
const loginUsername = document.getElementById('login-user');
const loginPassword = document.getElementById('login-password')

function onLogin() {

    for (user of accountLocalStorage) {
        if (loginUsername.value === user.username && loginPassword.value === user.password) {
            console.log('Logado com sucesso');
            return location.href = 'reminders.html';
        } else {
            alert('Usuário ou Senha incorretos!')
        }
    }
}