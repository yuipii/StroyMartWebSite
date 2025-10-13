document.getElementById('loginBtn').addEventListener('click', function() {
    const email = prompt('Введите ваш email:');
    if (email) {
        alert(`На ${email} отправлена ссылка для входа!`);
        this.textContent = 'Профиль';
    }
});