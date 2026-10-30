const soupSection = document.querySelector("#soup-section .dishes");
const mainSection = document.querySelector("#main-section .dishes");
const drinkSection = document.querySelector("#drink-section .dishes");
const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b.name));

function createDishCard(dish) {
    return `
        <div class="dish" data-dish="${dish.keyword}">
            <img src="${dish.image}" alt="${dish.name}">
            <p class="price">${dish.price} ₽</p>
            <p class="name">${dish.name}</p>
            <p class="weight">${dish.count}</p>
            <button>Добавить</button>
        </div>
    `;
}
sortedDishes.forEach(dish => {
    const cardHTML = createDishCard(dish);

    if (dish.category === "soup") {
        soupSection.insertAdjacentHTML("beforeend", cardHTML);
    } else if (dish.category === "main") {
        mainSection.insertAdjacentHTML("beforeend", cardHTML);
    } else if (dish.category === "drink") {
        drinkSection.insertAdjacentHTML("beforeend", cardHTML);
    }
});