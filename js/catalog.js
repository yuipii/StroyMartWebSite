// Единый массив товаров для всего сайта
const extendedProducts = [
    // Инструменты
    {
        id: 1,
        name: "Перфоратор Bosch GBH 2-26 DRE",
        price: 12490,
        image: "png/bosh.png",
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
        image: "png/makita.jpg",
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
        image: "",
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
        image: "png/Einhell.jpg",
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
        image: "images/products/plumbing.jpg",
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
        image: "images/products/plumbing.jpg",
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
        image: "images/products/plumbing.jpg",
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
        image: "images/products/plumbing.jpg",
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
        image: "images/products/electrical.jpg",
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
        image: "images/products/electrical.jpg",
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
        image: "images/products/electrical.jpg",
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
        image: "images/products/electrical.jpg",
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
        image: "images/products/paint.jpg",
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
        image: "images/products/paint.jpg",
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
        image: "images/products/paint.jpg",
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
        image: "images/products/paint.jpg",
        category: "paint",
        brand: "Ceresit",
        inStock: true,
        popularity: 79,
        description: "Грунтовка глубокого проникновения 10л"
    },
    
    // Стройматериалы
    {
        id: 17,
        name: "Цемент М500 50кг",
        price: 450,
        image: "images/products/cement.jpg",
        category: "materials",
        brand: "Лафарж",
        inStock: true,
        popularity: 98,
        description: "Портландцемент высокого качества"
    },
    {
        id: 18,
        name: "Кирпич строительный",
        price: 25,
        image: "images/products/bricks.jpg",
        category: "materials",
        brand: "Браер",
        inStock: true,
        popularity: 87,
        description: "Керамический кирпич полнотелый"
    },
    {
        id: 19,
        name: "Плитка керамическая",
        price: 850,
        image: "images/products/tiles.jpg",
        category: "materials",
        brand: "Керама Марацци",
        inStock: true,
        popularity: 75,
        description: "Напольная плитка 30x30 см"
    },
    {
        id: 20,
        name: "Гипсокартон 12.5мм",
        price: 320,
        image: "images/products/drywall.jpg",
        category: "materials",
        brand: "Кнауф",
        inStock: true,
        popularity: 83,
        description: "Гипсокартонный лист стандартный"
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
    setupFilterEventListeners();
});

// Настройка обработчиков событий для фильтров
function setupFilterEventListeners() {
    // Автоматическое применение фильтров при изменении
    document.querySelectorAll('.category-filter, .brand-filter').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    document.querySelectorAll('input[value="in_stock"], input[value="pre_order"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Применение фильтров по цене при изменении
    document.getElementById('minPrice').addEventListener('change', applyFilters);
    document.getElementById('maxPrice').addEventListener('change', applyFilters);
    
    // Enter в поле поиска
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Инициализация каталога на основе URL параметров
function initializeCatalog() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const search = urlParams.get('search');

    if (category) {
        // Устанавливаем фильтр по категории
        const categoryCheckbox = document.querySelector(`.category-filter[value="${category}"]`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
            currentFilters.categories = [category];
            updateCatalogTitle(category);
        }
    }

    if (search) {
        // Устанавливаем поисковый запрос
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = search;
        }
        performSearchFromURL(search);
    } else {
        applyFilters();
    }
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

    const catalogTitle = document.getElementById('catalogTitle');
    const breadcrumbCategory = document.getElementById('breadcrumbCategory');
    
    if (catalogTitle) {
        catalogTitle.textContent = titles[category] || 'Все товары';
    }
    if (breadcrumbCategory) {
        breadcrumbCategory.textContent = breadcrumbs[category] || 'Каталог';
    }
}

// Настройка фильтров по брендам
function setupBrandFilters() {
    const brands = [...new Set(extendedProducts.map(product => product.brand))].sort();
    const brandFiltersContainer = document.getElementById('brandFilters');
    
    if (brandFiltersContainer) {
        brandFiltersContainer.innerHTML = '';
        
        brands.forEach(brand => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" value="${brand}" class="brand-filter"> ${brand}`;
            brandFiltersContainer.appendChild(label);
        });
    }
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
    
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.value = 'name_asc';
    }
    
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
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    const sortValue = sortSelect.value;
    
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
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (currentProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <h3>Товары не найдены</h3>
                <p>Попробуйте изменить параметры фильтрации</p>
            </div>
        `;
        if (pagination) {
            pagination.innerHTML = '';
        }
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
    if (pagination) {
        renderPagination(totalPages);
    }
}

// Создание карточки товара для каталога
function createCatalogProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='images/products/default.jpg'">
        <div class="product-info">
            <div class="product-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                ${product.inStock ? 'В наличии' : 'Под заказ'}
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-brand">Бренд: ${product.brand}</p>
            <div class="product-price">${product.price.toLocaleString()} ₽</div>
            <div class="product-actions">
                <button class="buy-btn" onclick="addToCartFromCatalog(${product.id})" ${!product.inStock ? 'disabled' : ''}>
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
    if (!pagination) return;
    
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // Кнопка "Назад"
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&laquo;';
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => changePage(currentPage - 1);
    pagination.appendChild(prevButton);
    
    // Номера страниц
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
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
    const productsCountElement = document.getElementById('productsCount');
    if (productsCountElement) {
        productsCountElement.textContent = currentProducts.length;
    }
}

// Поиск из URL
function performSearchFromURL(searchTerm) {
    const searchResults = extendedProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    currentProducts = searchResults;
    currentPage = 1;
    displayProducts();
    updateProductsCount();
    
    const catalogTitle = document.getElementById('catalogTitle');
    const breadcrumbCategory = document.getElementById('breadcrumbCategory');
    
    if (catalogTitle) {
        catalogTitle.textContent = `Результаты поиска: "${searchTerm}"`;
    }
    if (breadcrumbCategory) {
        breadcrumbCategory.textContent = 'Поиск';
    }
}

// Поиск товаров
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        // Перенаправляем на страницу каталога с параметром поиска
        window.location.href = `catalog.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Добавление в корзину из каталога
function addToCartFromCatalog(productId) {
    const product = extendedProducts.find(p => p.id === productId);
    if (product) {
        if (!product.inStock) {
            alert('Этот товар временно отсутствует в наличии');
            return;
        }
        
        // Используем глобальную функцию addToCart из cart.js
        if (typeof addToCart === 'function') {
            addToCart(productId);
        } else {
            console.error('Функция addToCart не найдена');
        }
    }
}

// Создание карточки товара для каталога
function createCatalogProductCard(product) {
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
            <div class="product-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                ${product.inStock ? 'В наличии' : 'Под заказ'}
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-brand">Бренд: ${product.brand}</p>
            <div class="product-price">${product.price.toLocaleString()} ₽</div>
            <div class="product-actions">
                <button class="buy-btn" onclick="addToCartFromCatalog(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? 'В корзину' : 'Нет в наличии'}
                </button>
            </div>
        </div>
    `;
    return card;
}
