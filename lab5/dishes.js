const dishes = [
    {
        keyword: "tom-yam",
        name: "Том Ям",
        price: 320,
        category: "soup",
        kind: "fish",
        count: "350 г",
        image: "images/soup1.jpg"
    },
    {
        keyword: "fish-soup",
        name: "Уха",
        price: 280,
        category: "soup",
        kind: "fish",
        count: "300 г",
        image: "images/soup4.jpg"
    },
    {
        keyword: "borsch",
        name: "Борщ",
        price: 250,
        category: "soup",
        kind: "meat",
        count: "400 г",
        image: "images/soup3.jpg"
    },
    {
        keyword: "solyanka",
        name: "Солянка",
        price: 300,
        category: "soup",
        kind: "meat",
        count: "350 г",
        image: "images/soup5.jpg"
    },
    {
        keyword: "mushroom-soup",
        name: "Крем-суп грибной",
        price: 280,
        category: "soup",
        kind: "veg",
        count: "300 г",
        image: "images/soup2.jpg"
    },
    {
        keyword: "gazpacho",
        name: "Гаспачо",
        price: 260,
        category: "soup",
        kind: "veg",
        count: "300 г",
        image: "images/soup6.jpg"
    },
    {
        keyword: "chicken-rice",
        name: "Курица с рисом",
        price: 450,
        category: "main",
        kind: "meat",
        count: "350 г",
        image: "images/main1.jpg"
    },
    {
        keyword: "steak",
        name: "Стейк",
        price: 550,
        category: "main",
        kind: "meat",
        count: "400 г",
        image: "images/main2.jpg"
    },
    {
        keyword: "salmon",
        name: "Лосось на гриле",
        price: 620,
        category: "main",
        kind: "fish",
        count: "300 г",
        image: "images/main4.jpg"
    },
    {
        keyword: "fish-chips",
        name: "Фиш-энд-чипс",
        price: 480,
        category: "main",
        kind: "fish",
        count: "350 г",
        image: "images/main5.jpg"
    },
    {
        keyword: "carbonara",
        name: "Паста Карбонара",
        price: 400,
        category: "main",
        kind: "veg",
        count: "320 г",
        image: "images/main3.jpg"
    },
    {
        keyword: "veggie-bowl",
        name: "Овощной боул",
        price: 380,
        category: "main",
        kind: "veg",
        count: "350 г",
        image: "images/main6.jpg"
    },
    {
        keyword: "caesar",
        name: "Салат Цезарь",
        price: 280,
        category: "salad",
        kind: "meat",
        count: "250 г",
        image: "images/salad1.jpg"
    },
    {
        keyword: "greek",
        name: "Греческий салат",
        price: 260,
        category: "salad",
        kind: "veg",
        count: "230 г",
        image: "images/salad2.jpg"
    },
    {
        keyword: "veggie-salad",
        name: "Овощной салат",
        price: 220,
        category: "salad",
        kind: "veg",
        count: "200 г",
        image: "images/salad3.jpg"
    },
    {
        keyword: "caprese",
        name: "Капрезе",
        price: 290,
        category: "salad",
        kind: "veg",
        count: "220 г",
        image: "images/salad4.jpg"
    },
    {
        keyword: "avocado-salad",
        name: "Салат с авокадо",
        price: 320,
        category: "salad",
        kind: "veg",
        count: "240 г",
        image: "images/salad5.jpg"
    },
    {
        keyword: "tuna-salad",
        name: "Салат с тунцом",
        price: 340,
        category: "salad",
        kind: "fish",
        count: "250 г",
        image: "images/salad6.jpg"
    },
    {
        keyword: "tea",
        name: "Чай",
        price: 150,
        category: "drink",
        kind: "hot",
        count: "300 мл",
        image: "images/drink1.jpg"
    },
    {
        keyword: "coffee",
        name: "Кофе",
        price: 200,
        category: "drink",
        kind: "hot",
        count: "250 мл",
        image: "images/drink2.jpg"
    },
    {
        keyword: "cocoa",
        name: "Какао",
        price: 180,
        category: "drink",
        kind: "hot",
        count: "250 мл",
        image: "images/drink4.jpg"
    },
    {
        keyword: "orange-juice",
        name: "Сок апельсиновый",
        price: 180,
        category: "drink",
        kind: "cold",
        count: "300 мл",
        image: "images/drink3.jpg"
    },
    {
        keyword: "lemonade",
        name: "Лимонад",
        price: 170,
        category: "drink",
        kind: "cold",
        count: "300 мл",
        image: "images/drink5.jpg"
    },
    {
        keyword: "iced-tea",
        name: "Холодный чай",
        price: 190,
        category: "drink",
        kind: "cold",
        count: "350 мл",
        image: "images/drink6.jpg"
    },
    {
        keyword: "cheesecake",
        name: "Чизкейк",
        price: 250,
        category: "dessert",
        kind: "small",
        count: "100 г",
        image: "images/dessert1.jpg"
    },
    {
        keyword: "tiramisu",
        name: "Тирамису",
        price: 280,
        category: "dessert",
        kind: "small",
        count: "120 г",
        image: "images/dessert2.jpg"
    },
    {
        keyword: "macaron",
        name: "Макарон",
        price: 150,
        category: "dessert",
        kind: "small",
        count: "60 г",
        image: "images/dessert3.jpg"
    },
    {
        keyword: "brownie",
        name: "Брауни",
        price: 300,
        category: "dessert",
        kind: "medium",
        count: "180 г",
        image: "images/dessert4.jpg"
    },
    {
        keyword: "panna-cotta",
        name: "Панна котта",
        price: 320,
        category: "dessert",
        kind: "medium",
        count: "200 г",
        image: "images/dessert5.jpg"
    },
    {
        keyword: "cake",
        name: "Торт Наполеон",
        price: 450,
        category: "dessert",
        kind: "large",
        count: "300 г",
        image: "images/dessert6.jpg"
    }
];