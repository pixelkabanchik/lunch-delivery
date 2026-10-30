// [ЛАБА 5] Объект с выбранными блюдами (добавлены salad и dessert)
const selected = {
    soup: null,
    main: null,
    salad: null,
    drink: null,
    dessert: null
};

// [ЛАБА 5] Отрисовка выбранных блюд в форме
function renderOrder() {
    const orderBlock = document.querySelector("#order-items");

    const isEmpty = !selected.soup && !selected.main && !selected.salad
        && !selected.drink && !selected.dessert;

    if (isEmpty) {
        orderBlock.innerHTML = "<p>Ничего не выбрано</p>";
        document.querySelector("#order-total").style.display = "none";
        return;
    }

    let html = "";

    if (selected.soup) {
        html += "<p>Суп</p>";
        html += `<p>${selected.soup.name} — ${selected.soup.price} ₽</p>`;
    }
    if (selected.main) {
        html += "<p>Главное блюдо</p>";
        html += `<p>${selected.main.name} — ${selected.main.price} ₽</p>`;
    }
    if (selected.salad) {
        html += "<p>Салат или стартер</p>";
        html += `<p>${selected.salad.name} — ${selected.salad.price} ₽</p>`;
    }
    if (selected.drink) {
        html += "<p>Напиток</p>";
        html += `<p>${selected.drink.name} — ${selected.drink.price} ₽</p>`;
    }
    if (selected.dessert) {
        html += "<p>Десерт</p>";
        html += `<p>${selected.dessert.name} — ${selected.dessert.price} ₽</p>`;
    }

    orderBlock.innerHTML = html;

    // [ЛАБА 5] Подсчет стоимости
    const total = (selected.soup?.price || 0)
        + (selected.main?.price || 0)
        + (selected.salad?.price || 0)
        + (selected.drink?.price || 0)
        + (selected.dessert?.price || 0);

    const totalBlock = document.querySelector("#order-total");
    totalBlock.style.display = "block";
    totalBlock.innerHTML = `<p>Стоимость заказа: ${total} ₽</p>`;
}

// [ЛАБА 5] Клик по карточке блюда
document.addEventListener("click", (event) => {
    const card = event.target.closest(".dish");
    if (!card) return;

    const keyword = card.dataset.dish;
    const dish = dishes.find(d => d.keyword === keyword);

    selected[dish.category] = dish;
    renderOrder();
});

renderOrder();