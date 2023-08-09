
// const counterGroups = document.querySelectorAll('.counter-wrapper')

// function makeCounter(startValue) {
//     let counter = startValue;
//     return function(n) {
//         counter += n;
//         return counter;
//     }
// }

// counterFunc = (elem) => {
//     let oneCounter = makeCounter(1);
//     const initialVal = elem.querySelector('[data-counter]')
//     elem.addEventListener('click', (e) => {
//         if (e.target.dataset.action === 'minus') {
//             if (+initialVal.textContent > 0) {
//                 initialVal.textContent = oneCounter(-1)
//             }
//         }
//         if (e.target.dataset.action === 'plus') {
//             initialVal.textContent = oneCounter(1)
//         }
//     })
// }



// counterGroups.forEach(group => counterFunc(group))

import calculateCartPrice from './calculateCartPrice.js';
import {hideDelivery, calculateDelivery} from './calculateDelivery.js';
import toogleCartStatus from './toogleCartStatus.js';
import {increaseAmountInStorage} from './localStorage.js';

function counter() {
    window.addEventListener('click', (e) => {

        if (e.target.dataset.action === 'minus' || e.target.dataset.action === 'plus') {

            let card;
            let initialVal;

            if (e.target.dataset.action === 'minus') {
                card = e.target.closest('.counter-wrapper');
                initialVal = card.querySelector('[data-counter]')

                // удаление карточек из корзины если количество 1 и меньше
                if (e.target.closest('.cart-wrapper')) {
                    increaseAmountInStorage(e.target.closest('.cart-item').dataset.id, -1);

                    if (+initialVal.textContent === 1) {
                        e.target.closest('.cart-item').remove();
                        toogleCartStatus();
                        calculateCartPrice();
                        calculateDelivery();
                        hideDelivery();
                        localStorage.removeItem(`data-${e.target.closest('.cart-item').dataset.id}`)
                    }
                }

                    if (+initialVal.textContent > 1) {
                        initialVal.textContent = --initialVal.textContent;
                    }

            }

            if (e.target.dataset.action === 'plus') {

                card = e.target.closest('.counter-wrapper');
                initialVal = card.querySelector('[data-counter]');
                initialVal.textContent = ++initialVal.textContent;

                if (e.target.closest('.cart-wrapper')) {
                    increaseAmountInStorage(e.target.closest('.cart-item').dataset.id, 1);
                }

            }

            if (e.target.closest('.cart-wrapper')) {
                // обновляем общую стоимость корзины
                calculateCartPrice();
                calculateDelivery();

            }

        }
    })
}

export default counter;