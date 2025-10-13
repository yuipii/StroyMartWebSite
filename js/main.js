// Sample product data
const products = [
    {
        id: 1,
        name: "Цемент М500 50кг",
        price: 450,
        image: "images/products/cement.jpg",
        category: "materials"
    },
    {
        id: 2,
        name: "Кирпич строительный",
        price: 25,
        image: "images/products/bricks.jpg",
        category: "materials"
    },
    {
        id: 3,
        name: "Перфоратор Bosch",
        price: 12000,
        image: "images/products/tools.jpg",
        category: "tools"
    },
    {
        id: 4,
        name: "Краска белая 10л",
        price: 2800,
        image: "images/icons/cart-icon.png",
        category: "paint"
    },
    {
        id: 5,
        name: "Плитка керамическая",
        price: 850,
        image: "images/heroes/promo-banner.jpg",
        category: "materials"
    },
    {
        id: 6,
        name: "Шуруповерт аккумуляторный",
        price: 5600,
        image: "images/products/tools.jpg",
        category: "tools"
    }
];

// Initialize the site
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    setupEventListeners();
});

// Display products in grid
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">${product.price} ₽</div>
            <div class="product-actions">
                <button class="buy-btn" onclick="addToCart(${product.id})">В корзину</button>
            </div>
        </div>
    `;
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Category cards click
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            alert(`Переход в категорию: ${categoryName}`);
        });
    });

    // CTA buttons
    document.querySelector('.cta-button').addEventListener('click', function() {
        document.querySelector('#materials').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('.promo-btn').addEventListener('click', function() {
        document.getElementById('loginBtn').click();
    });
}

// Search functionality (basic)
document.querySelector('.search button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search input').value;
    if (searchTerm) {
        alert(`Поиск: ${searchTerm}`);
        // Here you would implement actual search
    }
});
// Добавьте эту функцию в конец файла main.js
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        window.location.href = `catalog.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Добавьте обработчик Enter в поле поиска
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});