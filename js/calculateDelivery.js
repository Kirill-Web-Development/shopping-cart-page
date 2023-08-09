const deliveryEl = document.querySelector('[data-delivery]');

function hideDelivery() {
    deliveryEl.classList.add('none')
}

function calculateDelivery() {
    const costEl = document.querySelector('.total-price')
    let cost = +costEl.textContent;
    const free = document.querySelector('.delivery-cost')
    if (cost) {
        deliveryEl.classList.remove('none');
        if(cost - 250 > 1100) {
            free.textContent = 'бесплатно'
            free.classList.add('free')
            costEl.textContent = cost - 250;
        } else {
            free.textContent = '250 ₽'
            free.classList.remove('free')
        }
    }

}

export {hideDelivery, calculateDelivery}