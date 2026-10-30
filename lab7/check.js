// [ЛАБА 6]

const orderForm = document.querySelector(".order form");

// Слушаем отправку формы
orderForm.addEventListener("submit", (event) => {
    const errorText = getErrorText();

    if (errorText) {
        event.preventDefault(); 
        showNotification(errorText);
    }
});

// [ЛАБА 6] 
function getErrorText() {
    const hasSoup = selected.soup !== null;
    const hasMain = selected.main !== null;
    const hasSalad = selected.salad !== null;
    const hasDrink = selected.drink !== null;
    const hasDessert = selected.dessert !== null;

    if (!hasSoup && !hasMain && !hasSalad && !hasDrink && !hasDessert) {
        return "Ничего не выбрано. Выберите блюда для заказа";
    }

    if ((hasSoup || hasMain || hasSalad) && !hasDrink) {
        return "Выберите напиток";
    }

    if (hasSoup && !hasMain && !hasSalad) {
        return "Выберите главное блюдо/салат/стартер";
    }

    if (hasSalad && !hasSoup && !hasMain) {
        return "Выберите суп или главное блюдо";
    }

    if (hasDrink && !hasSoup && !hasMain && !hasSalad) {
        return "Выберите главное блюдо";
    }

    return null;
}

// [ЛАБА 6] Функция показа уведомления
function showNotification(text) {
    const oldNotification = document.querySelector(".notification");
    if (oldNotification) oldNotification.remove();

    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = `
        <p>${text}</p>
        <button>Окей</button>
    `;

    document.body.append(notification);

    notification.querySelector("button").addEventListener("click", () => {
        notification.remove();
    });
}