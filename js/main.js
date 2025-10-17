// Используем единый массив товаров из catalog.js
// Для главной страницы показываем только популярные товары

// Initialize the site
document.addEventListener('DOMContentLoaded', function() {
    displayPopularProducts();
    setupEventListeners();
});

// Display popular products in grid
function displayPopularProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;
    
    // Берем товары из extendedProducts (должны быть доступны глобально)
    const productsToShow = typeof extendedProducts !== 'undefined' 
        ? extendedProducts.filter(p => p.popularity > 80).slice(0, 6)
        : getFallbackProducts();
    
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Fallback products if extendedProducts is not available
function getFallbackProducts() {
    return [
        {
            id: 1,
            name: "Цемент М500 50кг",
            price: 450,
            image: "png/cement1.jpg",
            category: "materials",
            inStock: true
        },
        {
            id: 2,
            name: "Кирпич строительный",
            price: 25,
            image: "png/block.jpg",
            category: "materials",
            inStock: true
        },
        {
            id: 3,
            name: "Перфоратор Bosch",
            price: 12000,
            image: "png/tools1.jpg",
            category: "tools",
            inStock: true
        },
        {
            id: 4,
            name: "Краска белая 10л",
            price: 2800,
            image: "png/white.jpg",
            category: "paint",
            inStock: true
        },
        {
            id: 5,
            name: "Плитка керамическая",
            price: 850,
            image: "png/plitka.jpg",
            category: "materials",
            inStock: true
        },
        {
            id: 6,
            name: "Шуруповерт аккумуляторный",
            price: 5600,
            image: "png/tools2.jpg",
            category: "tools",
            inStock: true
        }
    ];
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='images/products/default.jpg'">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">${product.price.toLocaleString()} ₽</div>
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
            const categoryMap = {
                'Стройматериалы': 'materials',
                'Инструменты': 'tools',
                'Сантехника': 'plumbing',
                'Электрика': 'electrical'
            };
            
            const categoryKey = categoryMap[categoryName];
            if (categoryKey) {
                window.location.href = `catalog.html?category=${categoryKey}`;
            }
        });
    });

    // CTA buttons
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            window.location.href = 'catalog.html';
        });
    }

    const promoButton = document.querySelector('.promo-btn');
    if (promoButton) {
        promoButton.addEventListener('click', function() {
            document.getElementById('loginBtn').click();
        });
    }
    
    // Search functionality
    setupSearch();
}

// Search functionality
function setupSearch() {
    const searchButton = document.querySelector('.search button');
    const searchInput = document.querySelector('.search input');
    
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Global search function
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        window.location.href = `catalog.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Проверяем наличие изображения и добавляем fallback
    const imageSrc = product.image && product.image !== '' 
        ? product.image 
        : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNCRDNDM0MiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5GPPC90ZXh0Pgo8L3N2Zz4K';
    
    card.innerHTML = `
        <img src="${imageSrc}" alt="${product.name}" class="product-image" 
             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNCRDNDM0MiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5GPPC90ZXh0Pgo8L3N2Zz4K'">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">${product.price.toLocaleString()} ₽</div>
            <div class="product-actions">
                <button class="buy-btn" onclick="addToCart(${product.id})">В корзину</button>
            </div>
        </div>
    `;
    return card;
}
