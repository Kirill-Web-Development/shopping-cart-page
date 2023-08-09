// import render from './renderProducts.js';
import renderLocal from './localStorage.js'
import calculateCartPrice from './calculateCartPrice.js';
import {hideDelivery, calculateDelivery} from './calculateDelivery.js';
import toogleCartStatus from './toogleCartStatus.js';
import counter from './couter.js';
import cart from './cart.js';

window.addEventListener('DOMContentLoaded', () => {

    renderLocal();
    calculateCartPrice();
    hideDelivery();
    calculateDelivery();
    toogleCartStatus();
    counter();
    cart();

})