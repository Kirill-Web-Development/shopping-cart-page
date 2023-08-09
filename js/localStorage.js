import render from './renderProducts.js'

function increaseAmountInStorage(id, incr) {
    const update = JSON.parse(localStorage.getItem(`data-${id}`));
    // update.selectAmount = +update.selectAmount;
    update.selectAmount += incr;
    localStorage.removeItem(`data-${id}`)
    localStorage.setItem(`data-${id}`, JSON.stringify(update))
}


function renderLocal() {
    const localItems = [];

    // Итерируемся по каждому ключу в localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));

      // Добавляем ключ и значение в объект allItems
      localItems.push(value)
    }

    const cardWrapper = document.querySelector('.cart-wrapper');

    localItems.forEach(data => {
        const card = document.createElement('div')
        card.classList.add('cart-item')
        card.dataset.id = data.id
        card.innerHTML = render(data)
        cardWrapper.insertAdjacentElement('beforeend', card)
    })
}

export {increaseAmountInStorage};
export default renderLocal;