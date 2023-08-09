function calculateCartPrice() {
    const   itemsInCart = Array.from(document.querySelectorAll('.cart-item')),
            initialCost = document.querySelector('.total-price'),
            cost = itemsInCart.reduce((res, curr) => {
                return res + (+curr.querySelector('[data-counter]').textContent * parseInt(curr.querySelector('.price__currency').textContent))
            }, 0)
        if (cost > 0) {
            initialCost.textContent = cost + 250;
        } else{
            initialCost.textContent = 0;
        }
}

export default calculateCartPrice;