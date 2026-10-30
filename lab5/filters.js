// Обработчик клика по фильтру
document.querySelectorAll(".filters").forEach(filterBlock => {
    filterBlock.addEventListener("click", (event) => {
        const btn = event.target.closest(".filter-btn");
        if (!btn) return;

        const kind = btn.dataset.kind;
        const section = btn.closest("section");
        const dishes = section.querySelectorAll(".dish");

        // Если кнопка уже активна — снимаем фильтр
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            dishes.forEach(dish => dish.style.display = "");
            return;
        }

        // Снимаем active со всех кнопок в этом блоке
        filterBlock.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));

        // Добавляем active на нажатую
        btn.classList.add("active");

        // Фильтруем
        dishes.forEach(dish => {
            if (dish.dataset.kind === kind) {
                dish.style.display = "";
            } else {
                dish.style.display = "none";
            }
        });
    });
});