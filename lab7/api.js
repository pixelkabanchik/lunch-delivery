async function loadDishes() {
    try {
        // ВАЖНО: Используем /default (стандартные блюда), так как /my у тебя пустой
        const url = "https://web-basics-api-gagashaggy.msk1.amvera.tech/labs/api/dishes/default?api_key=390ed67d-64e0-30b6-9510-178188e8e0cb";
        
        const response = await fetch(url);
        
        if (!response.ok) {
            console.error("Сервер вернул ошибку со статусом:", response.status);
            throw new Error(`Ошибка при загрузке данных: ${response.status}`);
        }

        const data = await response.json();
        console.log("Данные с сервера:", data);
        
        // Сохраняем данные в глобальную переменную
        window.dishes = data; 
        
        // Запускаем отрисовку
        initPage(); 

    } catch (error) {
        console.error("Не удалось загрузить блюда:", error);
        alert("Ошибка загрузки меню. Проверьте интернет или API-ключ.");
    }
}

loadDishes();