const selected = {
    soup: null,
    main: null,
    drink: null
};
const dishCards = document.querySelectorAll(".dish");

function renderOrder() {
    const orderBlock = document.querySelector("#order-items");

    if (!selected.soup && !selected.main && !selected.drink) {
        orderBlock.innerHTML = "<p>Ничего не выбрано</p>";
        document.querySelector("#order-total").style.display = "none";
        return;
    }

    let html = "";
    html += "<p>Суп</p>";
    html += selected.soup
        ? `<p>${selected.soup.name} — ${selected.soup.price} ₽</p>`
        : "<p>Блюдо не выбрано</p>";

    html += "<p>Главное блюдо</p>";
    html += selected.main
        ? `<p>${selected.main.name} — ${selected.main.price} ₽</p>`
        : "<p>Блюдо не выбрано</p>";

    html += "<p>Напиток</p>";
    html += selected.drink
        ? `<p>${selected.drink.name} — ${selected.drink.price} ₽</p>`
        : "<p>Напиток не выбран</p>";

    orderBlock.innerHTML = html;
    const total = (selected.soup?.price || 0)
        + (selected.main?.price || 0)
        + (selected.drink?.price || 0);

    const totalBlock = document.querySelector("#order-total");
    totalBlock.style.display = "block";
    totalBlock.innerHTML = `<p>Стоимость заказа: ${total} ₽</p>`;
}

dishCards.forEach(card => {
    card.addEventListener("click", () => {
        const keyword = card.dataset.dish;
        const dish = dishes.find(d => d.keyword === keyword);

        selected[dish.category] = dish;
        renderOrder();
    });
});

renderOrder();