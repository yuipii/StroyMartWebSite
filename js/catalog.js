// Расширенные данные товаров
const extendedProducts = [
    // Инструменты
    {
        id: 1,
        name: "Перфоратор Bosch GBH 2-26 DRE",
        price: 12490,
        image: "images/products/tools.jpg",
        category: "tools",
        brand: "Bosch",
        inStock: true,
        popularity: 95,
        description: "Мощный перфоратор для профессионального использования"
    },
    {
        id: 2,
        name: "Шуруповерт аккумуляторный Makita",
        price: 7890,
        image: "images/products/tools.jpg",
        category: "tools",
        brand: "Makita",
        inStock: true,
        popularity: 88,
        description: "Беспроводной шуруповерт с двумя аккумуляторами"
    },
    {
        id: 3,
        name: "Болгарка DeWalt DWE4207",
        price: 15600,
        image: "images/products/tools.jpg",
        category: "tools",
        brand: "DeWalt",
        inStock: false,
        popularity: 76,
        description: "Углошлифовальная машина 125мм, 1500Вт"
    },
    {
        id: 4,
        name: "Электролобзик Einhell",
        price: 4290,
        image: "images/products/tools.jpg",
        category: "tools",
        brand: "Einhell",
        inStock: true,
        popularity: 67,
        description: "Электролобзик с маятниковым ходом"
    },

    // Сантехника
    {
        id: 5,
        name: "Смеситель для раковины Grohe",
        price: 8450,
        image: "images/heroes/promo-banner.jpg",
        category: "plumbing",
        brand: "Grohe",
        inStock: true,
        popularity: 82,
        description: "Одновыводный смеситель с аэратором"
    },
    {
        id: 6,
        name: "Унитаз подвесной Cersanit",
        price: 25600,
        image: "images/heroes/promo-banner.jpg",
        category: "plumbing",
        brand: "Cersanit",
        inStock: true,
        popularity: 71,
        description: "Подвесной унитаз с инсталляцией"
    },
    {
        id: 7,
        name: "Душевая система Hansgrohe",
        price: 42300,
        image: "images/heroes/promo-banner.jpg",
        category: "plumbing",
        brand: "Hansgrohe",
        inStock: false,
        popularity: 59,
        description: "Душевая панель с тропическим душем"
    },
    {
        id: 8,
        name: "Труба полипропиленовая 20мм",
        price: 85,
        image: "images/heroes/promo-banner.jpg",
        category: "plumbing",
        brand: "Политек",
        inStock: true,
        popularity: 94,
        description: "Полипропиленовая труба для водоснабжения"
    },

    // Электрика
    {
        id: 9,
        name: "Розетка двойная Legrand",
        price: 340,
        image: "images/icons/cart-icon.png",
        category: "electrical",
        brand: "Legrand",
        inStock: true,
        popularity: 89,
        description: "Евророзетка с заземлением, белая"
    },
    {
        id: 10,
        name: "Выключатель двухклавишный Schneider",
        price: 290,
        image: "images/icons/cart-icon.png",
        category: "electrical",
        brand: "Schneider",
        inStock: true,
        popularity: 78,
        description: "Выключатель для скрытого монтажа"
    },
    {
        id: 11,
        name: "Светильник потолочный Gauss",
        price: 1200,
        image: "images/icons/cart-icon.png",
        category: "electrical",
        brand: "Gauss",
        inStock: true,
        popularity: 65,
        description: "Светодиодный потолочный светильник"
    },
    {
        id: 12,
        name: "Кабель ВВГнг 3x2.5",
        price: 85,
        image: "images/icons/cart-icon.png",
        category: "electrical",
        brand: "Энергокабель",
        inStock: true,
        popularity: 92,
        description: "Медный кабель для проводки"
    },

    // Лакокрасочные
    {
        id: 13,
        name: "Краска интерьерная Tikkurila 10л",
        price: 5600,
        image: "images/icons/cart-icon.png",
        category: "paint",
        brand: "Tikkurila",
        inStock: true,
        popularity: 85,
        description: "Водоэмульсионная краска для стен"
    },
    {
        id: 14,
        name: "Эмаль по металлу Hammerite",
        price: 890,
        image: "images/icons/cart-icon.png",
        category: "paint",
        brand: "Hammerite",
        inStock: true,
        popularity: 73,
        description: "Антикоррозийная эмаль 0.75л"
    },
    {
        id: 15,
        name: "Лак паркетный Lacra",
        price: 3200,
        image: "images/icons/cart-icon.png",
        category: "paint",
        brand: "Lakra",
        inStock: false,
        popularity: 62,
        description: "Износостойкий лак для пола 5л"
    },
    {
        id: 16,
        name: "Грунтовка универсальная Ceresit",
        price: 1450,
        image: "images/icons/cart-icon.png",
        category: "paint",
        brand: "Ceresit",
        inStock: true,
        popularity: 79,
        description: "Грунтовка глубокого проникновения 10л"
    }
];

// Переменные для состояния
let currentProducts = [];
let currentPage = 1;
const productsPerPage = 8;
let currentFilters = {
    categories: [],
    brands: [],
    minPrice: 0,
    maxPrice: 50000,
    inStock: false,
    preOrder: false
};

// Инициализация каталога
document.addEventListener('DOMContentLoaded', function() {
    initializeCatalog();
    setupBrandFilters();
});

// Инициализация каталога на основе URL параметров
function initializeCatalog() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const search = urlParams.get('search');

    if (category) {
        // Устанавливаем фильтр по категории
        document.querySelector(`.category-filter[value="${category}"]`).checked = true;
        currentFilters.categories = [category];
        updateCatalogTitle(category);
    }

    if (search) {
        // Устанавливаем поисковый запрос
        document.getElementById('searchInput').value = search;
        performSearchFromURL(search);
    }

    applyFilters();
}

// Обновление заголовка каталога
function updateCatalogTitle(category) {
    const titles = {
        'tools': 'Инструменты',
        'plumbing': 'Сантехника',
        'electrical': 'Электрика',
        'paint': 'Лакокрасочные материалы',
        'materials': 'Строительные материалы'
    };

    const breadcrumbs = {
        'tools': 'Инструменты',
        'plumbing': 'Сантехника',
        'electrical': 'Электрика',
        'paint': 'Лакокрасочные',
        'materials': 'Стройматериалы'
    };

    document.getElementById('catalogTitle').textContent = titles[category] || 'Все товары';
    document.getElementById('breadcrumbCategory').textContent = breadcrumbs[category] || 'Каталог';
}

// Настройка фильтров по брендам
function setupBrandFilters() {
    const brands = [...new Set(extendedProducts.map(product => product.brand))];
    const brandFiltersContainer = document.getElementById('brandFilters');
    
    brands.forEach(brand => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" value="${brand}" class="brand-filter"> ${brand}`;
        brandFiltersContainer.appendChild(label);
    });
}

// Применение фильтров
function applyFilters() {
    // Сбор текущих фильтров
    currentFilters.categories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(cb => cb.value);
    
    currentFilters.brands = Array.from(document.querySelectorAll('.brand-filter:checked'))
        .map(cb => cb.value);
    
    currentFilters.minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    currentFilters.maxPrice = parseInt(document.getElementById('maxPrice').value) || 50000;
    
    const stockFilters = Array.from(document.querySelectorAll('input[value="in_stock"], input[value="pre_order"]:checked'))
        .map(cb => cb.value);
    
    currentFilters.inStock = stockFilters.includes('in_stock');
    currentFilters.preOrder = stockFilters.includes('pre_order');

    // Фильтрация товаров
    let filteredProducts = extendedProducts.filter(product => {
        // Фильтр по категориям
        if (currentFilters.categories.length > 0 && !currentFilters.categories.includes(product.category)) {
            return false;
        }
        
        // Фильтр по брендам
        if (currentFilters.brands.length > 0 && !currentFilters.brands.includes(product.brand)) {
            return false;
        }
        
        // Фильтр по цене
        if (product.price < currentFilters.minPrice || product.price > currentFilters.maxPrice) {
            return false;
        }
        
        // Фильтр по наличию
        if (currentFilters.inStock && !product.inStock) {
            return false;
        }
        
        if (currentFilters.preOrder && product.inStock) {
            return false;
        }
        
        return true;
    });

    currentProducts = filteredProducts;
    currentPage = 1;
    displayProducts();
    updateProductsCount();
}

// Сброс фильтров
function resetFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('sortSelect').value = 'name_asc';
    
    currentFilters = {
        categories: [],
        brands: [],
        minPrice: 0,
        maxPrice: 50000,
        inStock: false,
        preOrder: false
    };
    
    applyFilters();
}

// Сортировка товаров
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    
    switch(sortValue) {
        case 'name_asc':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name_desc':
            currentProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price_asc':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price_desc':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            currentProducts.sort((a, b) => b.popularity - a.popularity);
            break;
    }
    
    currentPage = 1;
    displayProducts();
}

// Отображение товаров с пагинацией
function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const pagination = document.getElementById('pagination');
    
    productsGrid.innerHTML = '';
    
    if (currentProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <h3>Товары не найдены</h3>
                <p>Попробуйте изменить параметры фильтрации</p>
            </div>
        `;
        pagination.innerHTML = '';
        return;
    }
    
    // Пагинация
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = currentProducts.slice(startIndex, endIndex);
    
    // Отображение товаров
    productsToShow.forEach(product => {
        const productCard = createCatalogProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Отображение пагинации
    renderPagination(totalPages);
}

// Создание карточки товара для каталога
function createCatalogProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <div class="product-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                ${product.inStock ? 'В наличии' : 'Под заказ'}
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-brand">Бренд: ${product.brand}</p>
            <div class="product-price">${product.price.toLocaleString()} ₽</div>
            <div class="product-actions">
                <button class="buy-btn" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? 'В корзину' : 'Нет в наличии'}
                </button>
            </div>
        </div>
    `;
    return card;
}

// Пагинация
function renderPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // Кнопка "Назад"
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&laquo;';
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => changePage(currentPage - 1);
    pagination.appendChild(prevButton);
    
    // Номера страниц
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = currentPage === i ? 'active' : '';
        pageButton.onclick = () => changePage(i);
        pagination.appendChild(pageButton);
    }
    
    // Кнопка "Вперед"
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&raquo;';
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => changePage(currentPage + 1);
    pagination.appendChild(nextButton);
}

// Смена страницы
function changePage(page) {
    currentPage = page;
    displayProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Обновление счетчика товаров
function updateProductsCount() {
    document.getElementById('productsCount').textContent = currentProducts.length;
}

// Поиск из URL
function performSearchFromURL(searchTerm) {
    const searchResults = extendedProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    currentProducts = searchResults;
    currentPage = 1;
    displayProducts();
    updateProductsCount();
    
    document.getElementById('catalogTitle').textContent = `Результаты поиска: "${searchTerm}"`;
    document.getElementById('breadcrumbCategory').textContent = 'Поиск';
}

// Поиск товаров
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        // Перенаправляем на страницу каталога с параметром поиска
        window.location.href = `catalog.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Добавление в корзину (обновленная функция)
function addToCart(productId) {
    const product = extendedProducts.find(p => p.id === productId);
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
                ...product,
                quantity: 1
            });
        }
        
        updateCartCount();
        showNotification(`Добавлено в корзину: ${product.name}`);
    }
}