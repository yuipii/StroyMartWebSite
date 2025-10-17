let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Инициализация корзины при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

function addToCart(productId) {
    // Используем extendedProducts если доступен, иначе ищем в обоих массивах
    let product;
    
    if (typeof extendedProducts !== 'undefined') {
        product = extendedProducts.find(p => p.id === productId);
    } else {
        // Fallback поиск
        product = findProductById(productId);
    }
    
    if (product) {
        if (!product.inStock) {
            alert('Этот товар временно отсутствует в наличии');
            return;
        }
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        updateCartCount();
        saveCartToStorage();
        showNotification(`Добавлено в корзину: ${product.name}`);
    }
}

// Fallback поиск товара
function findProductById(productId) {
    // Пробуем найти в extendedProducts (может быть не доступен на главной странице)
    if (typeof extendedProducts !== 'undefined') {
        return extendedProducts.find(p => p.id === productId);
    }
    
    // Fallback массив для главной страницы
    const fallbackProducts = [
        { id: 1, name: "Цемент М500 50кг", price: 450, image: "images/products/cement.jpg", inStock: true },
        { id: 2, name: "Кирпич строительный", price: 25, image: "images/products/bricks.jpg", inStock: true },
        { id: 3, name: "Перфоратор Bosch", price: 12000, image: "images/products/tools.jpg", inStock: true },
        { id: 4, name: "Краска белая 10л", price: 2800, image: "images/products/paint.jpg", inStock: true },
        { id: 5, name: "Плитка керамическая", price: 850, image: "images/products/tiles.jpg", inStock: true },
        { id: 6, name: "Шуруповерт аккумуляторный", price: 5600, image: "images/products/tools.jpg", inStock: true }
    ];
    
    return fallbackProducts.find(p => p.id === productId);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCartToStorage();
    displayCartItems();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            saveCartToStorage();
            displayCartItems();
        }
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showNotification(message) {
    // Создаем или находим контейнер для уведомлений
    let notificationContainer = document.getElementById('notificationContainer');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notificationContainer';
        notificationContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        `;
        document.body.appendChild(notificationContainer);
    }
    
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.style.cssText = `
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        margin-bottom: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;
    notification.textContent = message;
    
    notificationContainer.appendChild(notification);
    
    // Автоматическое удаление через 3 секунды
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Функции для страницы корзины
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartContent = document.getElementById('cartContent');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
        return;
    }
    
    if (emptyCartMessage) emptyCartMessage.style.display = 'none';
    if (cartContent) cartContent.style.display = 'block';
    
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='images/products/default.jpg'">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="cart-item-quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">×</button>
            </div>
            <div class="cart-item-total">${itemTotal.toLocaleString()} ₽</div>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    if (cartTotalElement) {
        cartTotalElement.textContent = total.toLocaleString();
    }
}

function clearCart() {
    if (confirm('Очистить всю корзину?')) {
        cart = [];
        updateCartCount();
        saveCartToStorage();
        displayCartItems();
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста');
        return;
    }
    
    // Здесь должна быть логика оформления заказа
    alert('Переход к оформлению заказа...');
    // window.location.href = 'checkout.html';
}
