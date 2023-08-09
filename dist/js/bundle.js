/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/calculateCartPrice.js":
/*!**********************************!*\
  !*** ./js/calculateCartPrice.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculateCartPrice() {
  const itemsInCart = Array.from(document.querySelectorAll('.cart-item')),
    initialCost = document.querySelector('.total-price'),
    cost = itemsInCart.reduce((res, curr) => {
      return res + +curr.querySelector('[data-counter]').textContent * parseInt(curr.querySelector('.price__currency').textContent);
    }, 0);
  if (cost > 0) {
    initialCost.textContent = cost + 250;
  } else {
    initialCost.textContent = 0;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateCartPrice);

/***/ }),

/***/ "./js/calculateDelivery.js":
/*!*********************************!*\
  !*** ./js/calculateDelivery.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDelivery: () => (/* binding */ calculateDelivery),
/* harmony export */   hideDelivery: () => (/* binding */ hideDelivery)
/* harmony export */ });
const deliveryEl = document.querySelector('[data-delivery]');
function hideDelivery() {
  deliveryEl.classList.add('none');
}
function calculateDelivery() {
  const costEl = document.querySelector('.total-price');
  let cost = +costEl.textContent;
  const free = document.querySelector('.delivery-cost');
  if (cost) {
    deliveryEl.classList.remove('none');
    if (cost - 250 > 1100) {
      free.textContent = 'бесплатно';
      free.classList.add('free');
      costEl.textContent = cost - 250;
    } else {
      free.textContent = '250 ₽';
      free.classList.remove('free');
    }
  }
}


/***/ }),

/***/ "./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderProducts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProducts.js */ "./js/renderProducts.js");
/* harmony import */ var _calculateCartPrice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateCartPrice.js */ "./js/calculateCartPrice.js");
/* harmony import */ var _calculateDelivery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateDelivery.js */ "./js/calculateDelivery.js");
/* harmony import */ var _toogleCartStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toogleCartStatus.js */ "./js/toogleCartStatus.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage.js */ "./js/localStorage.js");





function findInParentCard(parent, selector) {
  let attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'textContent';
  return parent.querySelector(selector)[attr];
}
function cart() {
  const cardWrapper = document.querySelector('.cart-wrapper');
  const addToCartBtns = document.querySelectorAll('[data-cart]');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      let itemsInCart = Array.from(cardWrapper.querySelectorAll('.cart-item'));
      const parentCard = btn.closest('.card'),
        id = parentCard.dataset.id,
        img = findInParentCard(parentCard, '.product-img', 'src'),
        title = findInParentCard(parentCard, '.item-title'),
        totalAmount = findInParentCard(parentCard, '[data-items-in-box]'),
        grams = findInParentCard(parentCard, '.price__weight'),
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
        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_4__.increaseAmountInStorage)(id, selectAmount);
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
        };
        localStorage.setItem(`data-${id}`, JSON.stringify(data));
        const smallCard = document.createElement('div');
        smallCard.classList.add('cart-item');
        smallCard.dataset.id = data.id;
        smallCard.innerHTML = (0,_renderProducts_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
        cardWrapper.insertAdjacentElement('beforeend', smallCard);
      }

      // переключение блока корзина пуста
      (0,_toogleCartStatus_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

      // обновляем общую стоимость корзины
      (0,_calculateCartPrice_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

      // расчёт доставки
      (0,_calculateDelivery_js__WEBPACK_IMPORTED_MODULE_2__.calculateDelivery)();
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);

/***/ }),

/***/ "./js/couter.js":
/*!**********************!*\
  !*** ./js/couter.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calculateCartPrice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateCartPrice.js */ "./js/calculateCartPrice.js");
/* harmony import */ var _calculateDelivery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateDelivery.js */ "./js/calculateDelivery.js");
/* harmony import */ var _toogleCartStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toogleCartStatus.js */ "./js/toogleCartStatus.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage.js */ "./js/localStorage.js");
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





function counter() {
  window.addEventListener('click', e => {
    if (e.target.dataset.action === 'minus' || e.target.dataset.action === 'plus') {
      let card;
      let initialVal;
      if (e.target.dataset.action === 'minus') {
        card = e.target.closest('.counter-wrapper');
        initialVal = card.querySelector('[data-counter]');

        // удаление карточек из корзины если количество 1 и меньше
        if (e.target.closest('.cart-wrapper')) {
          (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.increaseAmountInStorage)(e.target.closest('.cart-item').dataset.id, -1);
          if (+initialVal.textContent === 1) {
            e.target.closest('.cart-item').remove();
            (0,_toogleCartStatus_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
            (0,_calculateCartPrice_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
            (0,_calculateDelivery_js__WEBPACK_IMPORTED_MODULE_1__.calculateDelivery)();
            (0,_calculateDelivery_js__WEBPACK_IMPORTED_MODULE_1__.hideDelivery)();
            localStorage.removeItem(`data-${e.target.closest('.cart-item').dataset.id}`);
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
          (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.increaseAmountInStorage)(e.target.closest('.cart-item').dataset.id, 1);
        }
      }
      if (e.target.closest('.cart-wrapper')) {
        // обновляем общую стоимость корзины
        (0,_calculateCartPrice_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        (0,_calculateDelivery_js__WEBPACK_IMPORTED_MODULE_1__.calculateDelivery)();
      }
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);

/***/ }),

/***/ "./js/localStorage.js":
/*!****************************!*\
  !*** ./js/localStorage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   increaseAmountInStorage: () => (/* binding */ increaseAmountInStorage)
/* harmony export */ });
/* harmony import */ var _renderProducts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProducts.js */ "./js/renderProducts.js");

function increaseAmountInStorage(id, incr) {
  const update = JSON.parse(localStorage.getItem(`data-${id}`));
  // update.selectAmount = +update.selectAmount;
  update.selectAmount += incr;
  localStorage.removeItem(`data-${id}`);
  localStorage.setItem(`data-${id}`, JSON.stringify(update));
}
function renderLocal() {
  const localItems = [];

  // Итерируемся по каждому ключу в localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    // Добавляем ключ и значение в объект allItems
    localItems.push(value);
  }
  const cardWrapper = document.querySelector('.cart-wrapper');
  localItems.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('cart-item');
    card.dataset.id = data.id;
    card.innerHTML = (0,_renderProducts_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    cardWrapper.insertAdjacentElement('beforeend', card);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderLocal);

/***/ }),

/***/ "./js/renderProducts.js":
/*!******************************!*\
  !*** ./js/renderProducts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderProducts(data) {
  return ` <div class="cart-item__top">
        <div class="cart-item__img">
            <img src=${data.img} alt=${data.title}>
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${data.title}</div>
            <div class="cart-item__weight">${data.totalAmount} / ${data.grams}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">

                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${data.selectAmount}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__currency">${data.price}</div>
                </div>

            </div>
            <!-- // cart-item__details -->

        </div>
    </div>
    `;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProducts);

/***/ }),

/***/ "./js/toogleCartStatus.js":
/*!********************************!*\
  !*** ./js/toogleCartStatus.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toogleCartStatus() {
  const cartWrapper = document.querySelector('.cart-wrapper');
  const children = cartWrapper.children;
  const cardEmptySign = document.querySelector('[data-cart-empty]');
  if (children.length) {
    cardEmptySign.classList.add('none');
  } else {
    cardEmptySign.classList.remove('none');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toogleCartStatus);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./js/localStorage.js");
/* harmony import */ var _calculateCartPrice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateCartPrice.js */ "./js/calculateCartPrice.js");
/* harmony import */ var _calculateDelivery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateDelivery.js */ "./js/calculateDelivery.js");
/* harmony import */ var _toogleCartStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toogleCartStatus.js */ "./js/toogleCartStatus.js");
/* harmony import */ var _couter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./couter.js */ "./js/couter.js");
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart.js */ "./js/cart.js");
// import render from './renderProducts.js';






window.addEventListener('DOMContentLoaded', () => {
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_calculateCartPrice_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_calculateDelivery_js__WEBPACK_IMPORTED_MODULE_2__.hideDelivery)();
  (0,_calculateDelivery_js__WEBPACK_IMPORTED_MODULE_2__.calculateDelivery)();
  (0,_toogleCartStatus_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_couter_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_cart_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map