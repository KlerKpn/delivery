import { v4 as uuid } from 'uuid';

const dishList = [
    {
        url: 'https://avatarko.ru/img/kartinka/14/zhivotnye_eda_zhaba_13164.jpg',
        label: 'Биг мак',
        type: 'burger',
        brand: 'Mac Donalds',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 135,
        id: uuid()
    },
    {
        url: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04043817/product-hamburger.png',
        label: 'Гамбургер',
        type: 'burger',
        brand: 'Mac Donalds',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 48,
        id: uuid()
    },
    {
        url: 'https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Cheeseburger.jpg',
        label: 'Чизбургер',
        type: 'burger',
        brand: 'Mac Donalds',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 50,
        id: uuid()
    },
    {
        url: 'https://mcdonalds-kupony.ru/wp-content/uploads/2019/10/4g25n3fgn.png',
        label: 'Кола',
        type: 'Напитки',
        brand: 'Mac Donalds',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 75,
        id: uuid()
    },
    {
        url: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04044451/product-french-fries.png',
        label: 'Картофель фри',
        type: 'Картофель',
        brand: 'Mac Donalds',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 48,
        id: uuid()
    },
    {
        url: 'https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Double-Cheeseburger.jpg',
        label: 'Двойной Чизбергер',
        type: 'burger',
        brand: 'Mac Donalds',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 135,
        id: uuid()
    },
    {
        url: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/2c7/2086_Ceasar_Roll_1500x1500_min.png',
        label: 'Цезарь ролл',
        type: 'burger',
        brand: 'Mac Donalds',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 163,
        id: uuid()
    },
    {
        url: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/bec/0000_Flurry_Tiramisu_1500x1500_min-_1_.png',
        label: 'Макфлурри тирамису',
        type: 'burger',
        brand: 'Mac Donalds',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 109,
        id: uuid()
    },
    {
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/dc2f6185-f15e-4b46-aab3-e99fe707a796.jpg',
        label: 'Сырная',
        type: 'Пицца',
        brand: 'Додо Пицца',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 245,
        id: uuid()
    },
    {
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/cb3bfb59-786a-438b-9c94-02887700f8ee.jpg',
        label: 'Пепперони',
        type: 'Пицца',
        brand: 'Додо Пицца',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 395,
        id: uuid()
    },
    {
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/8a813e3b734e457c848a60fc70a100d5_233x233.jpeg',
        label: 'Чизбургер пицца',
        type: 'Пицца',
        brand: 'Додо Пицца',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 395,
        id: uuid()
    },
    {
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/8ab3db32-6edf-4d99-a49a-3e5b2d55d8de.jpg',
        label: 'Гавайская',
        type: 'Пицца',
        brand: 'Додо Пицца',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 395,
        id: uuid()
    },
    {
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/ec9759ff-4fc8-45a4-bc46-9727acc9f90d.jpg',
        label: 'Морс черная смородина',
        type: 'Напитки',
        brand: 'Додо Пицца',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 95,
        id: uuid()
    },
    {
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/dfbbbf23b0a1454bb78537ae921df47c_233x233.jpeg',
        label: 'кофе ореховый латте',
        type: 'Напитки',
        brand: 'Додо Пицца',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 135,
        id: uuid()
    },
    {
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c1b00331327145d285117c147257dd10_233x233.jpeg',
        label: 'Марроканский пунш',
        type: 'Напитки',
        brand: 'Додо Пицца',
        description: 'Малосольные огурчики пипрони с молочком',
        price: 115,
        id: uuid()
    }

]

export default dishList