// Função para fechar o modal
const modal = document.getElementById('registerModal');
function closeModal() {
    modal.setAttribute('class', '');
    modal.setAttribute('style', 'display: none');
    body.setAttribute('class', '');
    body.setAttribute('style', '');
}

// Função para criar conta
const username = document.getElementById('reg-username');
const password = document.getElementById('reg-password');
const passwordConfirm = document.getElementById('repeat-reg-password');
const btnRegister = document.getElementById('btn-register');

function onCreateAccount() {
    const body = document.getElementById('body')

    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    if (username.value === '' || password.value === '' || passwordConfirm.value === '') {
        modal.setAttribute('class', 'modal fade show');
        modal.setAttribute('style', 'display: block');
        body.setAttribute('class', 'modal-open');
        body.setAttribute('style', 'overflow: hidden; padding-right: 0px;');
    }

    var user = {
        username: username.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
    }

    accounts.push(user);

    if (user.username !== '' && user.password !== '' && user.passwordConfirm !== '') {
        localStorage.setItem('accounts', JSON.stringify(accounts));
    };
}

// Função para ir para a tela de Login
function onHaveAccount() {
    return location.href = 'login.html';
}