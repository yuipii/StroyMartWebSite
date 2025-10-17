
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        this.loadUserFromStorage();
        this.setupEventListeners();
        this.updateAuthUI();
    }

    setupEventListeners() {
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.showAuthModal());
        }
    }

    showAuthModal() {
        if (this.currentUser) {
            this.showProfileMenu();
            return;
        }

        this.createAuthModal();
    }

    createAuthModal() {
        // Удаляем существующую модалку
        this.removeExistingModal();

        const modal = document.createElement('div');
        modal.className = 'auth-modal';
        modal.innerHTML = `
            <div class="auth-modal-content">
                <div class="auth-modal-header">
                    <h2>Вход в аккаунт</h2>
                    <button class="auth-close-btn">&times;</button>
                </div>
                
                <div class="auth-tabs">
                    <button class="auth-tab active" data-tab="login">Вход</button>
                    <button class="auth-tab" data-tab="register">Регистрация</button>
                </div>

                <div class="auth-forms">
                    <form class="auth-form active" id="loginForm">
                        <div class="form-group">
                            <label>Email или телефон</label>
                            <input type="text" id="loginEmail" placeholder="example@mail.ru" required>
                        </div>
                        <div class="form-group">
                            <label>Пароль</label>
                            <input type="password" id="loginPassword" placeholder="Введите пароль" required>
                            <button type="button" class="toggle-password">👁️</button>
                        </div>
                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" id="rememberMe">
                                <span class="checkmark"></span>
                                Запомнить меня
                            </label>
                            <a href="#" class="forgot-password">Забыли пароль?</a>
                        </div>
                        <button type="submit" class="auth-submit-btn">Войти</button>
                        
                        <div class="auth-divider">
                            <span>или войдите через</span>
                        </div>
                        
                        <div class="social-auth">
                            <button type="button" class="social-btn vk-btn">
                                <span>VK</span>
                            </button>
                            <button type="button" class="social-btn google-btn">
                                <span>Google</span>
                            </button>
                            <button type="button" class="social-btn yandex-btn">
                                <span>Яндекс</span>
                            </button>
                        </div>
                    </form>

                    <form class="auth-form" id="registerForm">
                        <div class="form-group">
                            <label>Имя</label>
                            <input type="text" id="registerName" placeholder="Ваше имя" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="registerEmail" placeholder="example@mail.ru" required>
                        </div>
                        <div class="form-group">
                            <label>Телефон</label>
                            <input type="tel" id="registerPhone" placeholder="+7 (999) 123-45-67" required>
                        </div>
                        <div class="form-group">
                            <label>Пароль</label>
                            <input type="password" id="registerPassword" placeholder="Не менее 6 символов" required>
                            <button type="button" class="toggle-password">👁️</button>
                        </div>
                        <div class="form-group">
                            <label>Повторите пароль</label>
                            <input type="password" id="registerPasswordConfirm" placeholder="Повторите пароль" required>
                        </div>
                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" id="acceptTerms" required>
                                <span class="checkmark"></span>
                                Я принимаю <a href="#">условия использования</a>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" id="acceptNewsletter">
                                <span class="checkmark"></span>
                                Получать специальные предложения
                            </label>
                        </div>
                        <button type="submit" class="auth-submit-btn">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.setupModalEvents();
        this.showModal(modal);
    }

    setupModalEvents() {
        const modal = document.querySelector('.auth-modal');
        const closeBtn = modal.querySelector('.auth-close-btn');
        const tabs = modal.querySelectorAll('.auth-tab');
        const forms = modal.querySelectorAll('.auth-form');
        const togglePasswordBtns = modal.querySelectorAll('.toggle-password');

        // Закрытие модалки
        closeBtn.addEventListener('click', () => this.hideModal());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.hideModal();
        });

        // Переключение табов
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                
                tabs.forEach(t => t.classList.remove('active'));
                forms.forEach(f => f.classList.remove('active'));
                
                tab.classList.add('active');
                document.getElementById(`${tabName}Form`).classList.add('active');
            });
        });

        // Переключение видимости пароля
        togglePasswordBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const input = e.target.parentElement.querySelector('input');
                const type = input.type === 'password' ? 'text' : 'password';
                input.type = type;
                e.target.textContent = type === 'password' ? '👁️' : '🔒';
            });
        });

        // Обработка форм
        document.getElementById('loginForm').addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('registerForm').addEventListener('submit', (e) => this.handleRegister(e));

        // Социальные кнопки
        modal.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('click', () => this.socialAuth(btn.classList[1].replace('-btn', '')));
        });
    }

    async handleLogin(e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('.auth-submit-btn');
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Валидация
        if (!this.validateEmail(email) && !this.validatePhone(email)) {
            this.showError('Введите корректный email или телефон');
            return;
        }

        submitBtn.textContent = 'Вход...';
        submitBtn.disabled = true;

        try {
            // Имитация API запроса
            await this.mockApiCall(1500);
            
            this.currentUser = {
                id: 1,
                name: 'Иван Иванов',
                email: email,
                phone: '+7 (999) 123-45-67',
                avatar: null
            };

            this.saveUserToStorage();
            this.updateAuthUI();
            this.hideModal();
            this.showNotification('Вы успешно вошли!', 'success');

        } catch (error) {
            this.showError('Неверный email/телефон или пароль');
        } finally {
            submitBtn.textContent = 'Войти';
            submitBtn.disabled = false;
        }
    }

    async handleRegister(e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('.auth-submit-btn');
        const password = document.getElementById('registerPassword').value;
        const passwordConfirm = document.getElementById('registerPasswordConfirm').value;

        if (password !== passwordConfirm) {
            this.showError('Пароли не совпадают');
            return;
        }

        if (password.length < 6) {
            this.showError('Пароль должен содержать не менее 6 символов');
            return;
        }

        submitBtn.textContent = 'Регистрация...';
        submitBtn.disabled = true;

        try {
            await this.mockApiCall(2000);
            
            this.currentUser = {
                id: Date.now(),
                name: document.getElementById('registerName').value,
                email: document.getElementById('registerEmail').value,
                phone: document.getElementById('registerPhone').value,
                avatar: null
            };

            this.saveUserToStorage();
            this.updateAuthUI();
            this.hideModal();
            this.showNotification('Регистрация прошла успешно!', 'success');

        } catch (error) {
            this.showError('Ошибка регистрации. Попробуйте еще раз.');
        } finally {
            submitBtn.textContent = 'Зарегистрироваться';
            submitBtn.disabled = false;
        }
    }

    socialAuth(provider) {
        this.showNotification(`Вход через ${provider}`, 'info');
        // Здесь будет реальная интеграция с OAuth провайдерами
    }

    showProfileMenu() {
        const loginBtn = document.getElementById('loginBtn');
        const rect = loginBtn.getBoundingClientRect();
        
        this.removeExistingModal();

        const menu = document.createElement('div');
        menu.className = 'profile-menu';
        menu.style.cssText = `
            position: fixed;
            top: ${rect.bottom + 5}px;
            right: ${window.innerWidth - rect.right}px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.15);
            padding: 15px;
            min-width: 200px;
            z-index: 1001;
            animation: slideDown 0.2s ease-out;
        `;

        menu.innerHTML = `
            <div class="profile-header">
                <div class="profile-avatar">${this.getInitials(this.currentUser.name)}</div>
                <div class="profile-info">
                    <div class="profile-name">${this.currentUser.name}</div>
                    <div class="profile-email">${this.currentUser.email}</div>
                </div>
            </div>
            <div class="profile-menu-items">
                <a href="#" class="profile-menu-item">📦 Мои заказы</a>
                <a href="#" class="profile-menu-item">❤️ Избранное</a>
                <a href="#" class="profile-menu-item">⚙️ Настройки</a>
                <button class="profile-menu-item logout-btn">🚪 Выйти</button>
            </div>
        `;

        document.body.appendChild(menu);

        // Закрытие при клике вне меню
        setTimeout(() => {
            const closeHandler = (e) => {
                if (!menu.contains(e.target) && e.target !== loginBtn) {
                    menu.remove();
                    document.removeEventListener('click', closeHandler);
                }
            };
            document.addEventListener('click', closeHandler);
        }, 100);

        // Выход
        menu.querySelector('.logout-btn').addEventListener('click', () => this.logout());
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.updateAuthUI();
        this.showNotification('Вы вышли из аккаунта', 'info');
    }

    updateAuthUI() {
        const loginBtn = document.getElementById('loginBtn');
        if (!loginBtn) return;

        if (this.currentUser) {
            loginBtn.innerHTML = `
                <span class="user-avatar">${this.getInitials(this.currentUser.name)}</span>
                <span class="user-name">${this.currentUser.name.split(' ')[0]}</span>
            `;
            loginBtn.classList.add('logged-in');
        } else {
            loginBtn.innerHTML = 'Войти';
            loginBtn.classList.remove('logged-in');
        }
    }

    // Вспомогательные методы
    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    validatePhone(phone) {
        return /^[\+]?[78][-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(phone);
    }

    getInitials(name) {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }

    mockApiCall(delay) {
        return new Promise((resolve) => setTimeout(resolve, delay));
    }

    showModal(modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    }

    hideModal() {
        const modal = document.querySelector('.auth-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }

    removeExistingModal() {
        const existingModal = document.querySelector('.auth-modal, .profile-menu');
        if (existingModal) existingModal.remove();
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type = 'info') {
        // Используем существующую систему уведомлений из cart.js
        if (typeof showNotification === 'function') {
            showNotification(message);
        } else {
            alert(message);
        }
    }

    loadUserFromStorage() {
        const saved = localStorage.getItem('currentUser');
        if (saved) {
            this.currentUser = JSON.parse(saved);
        }
    }

    saveUserToStorage() {
        if (this.currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        }
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    window.authManager = new AuthManager();
});

// CSS анимации
const authStyles = `
<style>
.auth-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.auth-modal.active {
    opacity: 1;
}

.auth-modal-content {
    background: white;
    border-radius: 15px;
    padding: 0;
    max-width: 450px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    transform: scale(0.9);
    transition: transform 0.3s;
}

.auth-modal.active .auth-modal-content {
    transform: scale(1);
}

.auth-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25px;
    border-bottom: 1px solid #eee;
}

.auth-close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
}

.auth-tabs {
    display: flex;
    border-bottom: 1px solid #eee;
}

.auth-tab {
    flex: 1;
    padding: 15px;
    border: none;
    background: none;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
}

.auth-tab.active {
    border-bottom-color: #3498db;
    color: #3498db;
    font-weight: bold;
}

.auth-forms {
    padding: 25px;
}

.auth-form {
    display: none;
}

.auth-form.active {
    display: block;
}

.form-group {
    margin-bottom: 20px;
    position: relative;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #333;
}

.form-group input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.3s;
}

.form-group input:focus {
    border-color: #3498db;
    outline: none;
}

.toggle-password {
    position: absolute;
    right: 10px;
    top: 35px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 10px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
}

.checkbox-label input {
    display: none;
}

.checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #ddd;
    border-radius: 3px;
    margin-right: 8px;
    position: relative;
    transition: all 0.3s;
}

.checkbox-label input:checked + .checkmark {
    background: #3498db;
    border-color: #3498db;
}

.checkbox-label input:checked + .checkmark:after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
}

.forgot-password {
    color: #3498db;
    text-decoration: none;
    font-size: 14px;
}

.auth-submit-btn {
    width: 100%;
    padding: 15px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

.auth-submit-btn:hover {
    background: #2980b9;
}

.auth-submit-btn:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
}

.auth-divider {
    text-align: center;
    margin: 20px 0;
    position: relative;
}

.auth-divider:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #eee;
}

.auth-divider span {
    background: white;
    padding: 0 15px;
    color: #666;
    font-size: 14px;
}

.social-auth {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.social-btn {
    flex: 1;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
}

.social-btn:hover {
    border-color: #3498db;
    transform: translateY(-1px);
}

.vk-btn { color: #4C75A3; }
.google-btn { color: #DB4437; }
.yandex-btn { color: #FF0000; }

.profile-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
}

.profile-avatar {
    width: 40px;
    height: 40px;
    background: #3498db;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.profile-name {
    font-weight: bold;
    color: #333;
}

.profile-email {
    font-size: 12px;
    color: #666;
}

.profile-menu-items {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.profile-menu-item {
    padding: 10px;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
    text-decoration: none;
    color: #333;
    font-size: 14px;
}

.profile-menu-item:hover {
    background: #f8f9fa;
}

.logout-btn {
    color: #e74c3c !important;
    margin-top: 10px;
}

.user-avatar {
    width: 24px;
    height: 24px;
    background: #3498db;
    color: white;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    margin-right: 8px;
}

#loginBtn.logged-in {
    display: flex;
    align-items: center;
    gap: 8px;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 480px) {
    .auth-modal-content {
        width: 95%;
        margin: 20px;
    }
    
    .form-options {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .social-auth {
        flex-direction: column;
    }
}
</style>
`;

// Добавляем стили в документ
document.head.insertAdjacentHTML('beforeend', authStyles);
