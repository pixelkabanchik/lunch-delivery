document.querySelectorAll(".filters").forEach(filterBlock => {
    filterBlock.addEventListener("click", (event) => {
        const btn = event.target.closest(".filter-btn");
        if (!btn) return;

        const kind = btn.dataset.kind;
        const section = btn.closest("section");
        const dishes = section.querySelectorAll(".dish");

        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            dishes.forEach(dish => dish.style.display = "");
            return;
        }

        filterBlock.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        dishes.forEach(dish => {
            if (dish.dataset.kind === kind) {
                dish.style.display = "";
            } else {
                dish.style.display = "none";
            }
        });
    });
});