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

const lunchCombos = [
    { id: "combo1", name: "Ланч №1", items: ["soup", "main", "salad", "drink"] },
    { id: "combo2", name: "Ланч №2", items: ["soup", "main", "drink"] },
    { id: "combo3", name: "Ланч №3", items: ["soup", "salad", "drink"] },
    { id: "combo4", name: "Ланч №4", items: ["main", "salad", "drink"] },
    { id: "combo5", name: "Ланч №5", items: ["main", "drink"] }
];

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

function createFilters(category) {
    return filters[category].map(f =>
        `<button class="filter-btn" data-kind="${f.kind}">${f.label}</button>`
    ).join("");
}

function createComboCard(combo) {
    const dishesHTML = combo.items.map(category => {
        const dish = window.dishes.find(d => d.category === category);
        if (!dish) return ""; 
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

function initPage() {
    const sortedDishes = [...window.dishes].sort((a, b) => a.name.localeCompare(b.name));
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

    const combosSection = document.querySelector("#combos .combos-list");
    lunchCombos.forEach(combo => {
        combosSection.insertAdjacentHTML("beforeend", createComboCard(combo));
    });
}