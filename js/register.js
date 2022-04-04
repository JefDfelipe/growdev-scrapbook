const username = document.getElementById('reg-username');
const password = document.getElementById('reg-password');
const passwordConfirm = document.getElementById('repeat-reg-password');
const btnRegister = document.getElementById('btn-register');
const logMSG = document.getElementsByClassName('log-message');
const user = {
    username: username.value,
    password: password.value
};

async function onCreateAccount() {
    if (password.value !== passwordConfirm.value) {
        return logMSG.innerHTML = 'Senhas não combinam!';
    };

    if (!username.value || !password.value || !passwordConfirm.value) {
        return logMSG.innerHTML = 'Favor, preencher todos os campos.';
    };

    const { status, data } = await axios.post('https://growdev-jeferson-backend.herokuapp.com/register', user);

    if (status === 201) {
        data.name = user.username;
        data.password = user.password;
        return logMSG.innerHTML = 'Usuário cadastrado com sucesso.';
    } else {
        return logMSG.innerHTML = 'Usuário já cadastrado.';
    };
};

function onHaveAccount() {
    return location.href = 'index.html';
}