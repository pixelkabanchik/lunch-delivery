// [ЛАБА 5] Объект с фильтрами
const filters = {
    soup: [
        { kind: "fish", label: "Рыбный" },
        { kind: "meat", label: "Мясной" },
        { kind: "veg", label: "Вегетарианский" }
    ],
    main: [
        { kind: "fish", label: "Рыбное" },
        { kind: "meat", label: "Мясное" },
        { kind: "veg", label: "Вегетарианское" }
    ],
    salad: [
        { kind: "fish", label: "Рыбный" },
        { kind: "meat", label: "Мясной" },
        { kind: "veg", label: "Вегетарианский" }
    ],
    drink: [
        { kind: "cold", label: "Холодный" },
        { kind: "hot", label: "Горячий" }
    ],
    dessert: [
        { kind: "small", label: "Маленькая порция" },
        { kind: "medium", label: "Средняя порция" },
        { kind: "large", label: "Большая порция" }
    ]
};

// [ЛАБА 5] Создание карточки блюда
function createDishCard(dish) {
    return `
        <div class="dish" data-dish="${dish.keyword}" data-kind="${dish.kind}">
            <img src="${dish.image}" alt="${dish.name}">
            <p class="price">${dish.price} ₽</p>
            <p class="name">${dish.name}</p>
            <p class="weight">${dish.count}</p>
            <button>Добавить</button>
        </div>
    `;
}

// [ЛАБА 5] Создание кнопок фильтра
function createFilters(category) {
    return filters[category].map(f =>
        `<button class="filter-btn" data-kind="${f.kind}">${f.label}</button>`
    ).join("");
}

// [ЛАБА 5] Отрисовка блюд по категориям
const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b.name));
const categories = ["soup", "main", "salad", "drink", "dessert"];

categories.forEach(category => {
    const section = document.querySelector(`#${category}-section`);
    const dishesContainer = section.querySelector(".dishes");
    const filtersContainer = section.querySelector(".filters");

    filtersContainer.innerHTML = createFilters(category);

    const categoryDishes = sortedDishes.filter(d => d.category === category);
    categoryDishes.forEach(dish => {
        dishesContainer.insertAdjacentHTML("beforeend", createDishCard(dish));
    });
});

// [ЛАБА 6] Отрисовка блока с вариантами ланчей
const combosSection = document.querySelector("#combos .combos-list");

function createComboCard(combo) {
    const dishesHTML = combo.items.map(category => {
        const dish = dishes.find(d => d.category === category);
        return `
            <div class="combo-dish">
                <img src="${dish.image}" alt="${dish.name}">
                <p>${dish.name}</p>
            </div>
        `;
    }).join("");

    return `
        <div class="combo">
            <h3>${combo.name}</h3>
            <div class="combo-items">
                ${dishesHTML}
            </div>
            <p class="combo-dessert">Можно добавить десерт</p>
        </div>
    `;
}

combos.forEach(combo => {
    combosSection.insertAdjacentHTML("beforeend", createComboCard(combo));
});