import render from './renderProducts.js';
import calculateCartPrice from './calculateCartPrice.js';
import {calculateDelivery} from './calculateDelivery.js';
import toogleCartStatus from './toogleCartStatus.js';
import {increaseAmountInStorage} from './localStorage.js'

function findInParentCard(parent, selector, attr = 'textContent') {
    return parent.querySelector(selector)[attr];
} 

function cart() {
    const cardWrapper = document.querySelector('.cart-wrapper');
    const addToCartBtns = document.querySelectorAll('[data-cart]');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let itemsInCart = Array.from(cardWrapper.querySelectorAll('.cart-item'));
            const   parentCard = btn.closest('.card'),
                    id = parentCard.dataset.id,
                    img = findInParentCard(parentCard, '.product-img', 'src'),
                    title = findInParentCard(parentCard, '.item-title'),
                    totalAmount = findInParentCard(parentCard, '[data-items-in-box]'),
                    grams =  findInParentCard(parentCard, '.price__weight'),
                    selectAmount = +findInParentCard(parentCard, '[data-counter]'),
                    price = findInParentCard(parentCard, '.price__currency');
    
                    // обнуляем счетчик до 1, после добавления в корзину
                    parentCard.querySelector('[data-counter]').textContent = '1';
    
                    // проверка есть ли уже данный товар в корзине
                const checkCart = itemsInCart.find(item => item.dataset.id == id);
    
                    if (checkCart) {
                        // если товар уже есть в корзине
                        const val = checkCart.querySelector('[data-counter]');
                        // прибавляем выбранное количество, к уже отрисованной карточке
                        val.innerHTML = +val.innerHTML + selectAmount;
    
                        increaseAmountInStorage(id, selectAmount);
                    } else {
                        // если товара нет - формирование новой карточки в корзине
                        const data = {
                            id,
                            img,
                            title,
                            totalAmount,
                            grams,
                            selectAmount,
                            price
                        }
    
                        localStorage.setItem(`data-${id}`, JSON.stringify(data))
    
                    const smallCard = document.createElement('div');
                    smallCard.classList.add('cart-item')
                    smallCard.dataset.id = data.id
                    smallCard.innerHTML = render(data)
                    cardWrapper.insertAdjacentElement('beforeend', smallCard);
                    }
                    
                    // переключение блока корзина пуста
                    toogleCartStatus();
    
                    // обновляем общую стоимость корзины
                    calculateCartPrice();
    
                    // расчёт доставки
                    calculateDelivery();
    
        })
    })
}

export default cart;