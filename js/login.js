async function onLogin() {
    event.preventDefault();

    const loginUsername = document.getElementById('login-user');
    const loginPassword = document.getElementById('login-password');
    const loginError = document.getElementsByClassName('login-error');
    const user = {
        name: loginUsername,
        password: loginPassword
    };

    if (!loginUsername || !loginPassword) {
        loginError.innerHTML = 'Favor, preencher todos os campos!'
    };

    const {status, data} = await axios.post('https://growdev-jeferson-backend.herokuapp.com/login', user);

    if (status === 200) {
        localStorage.setItem('user', JSON.stringify(data));
        return location.href = 'reminders.html';
    } else {
        loginError.innerHTML = 'Usuário não encontrado!';
    };
};

function onNewAccount() {
    return location.href = 'register.html';
};