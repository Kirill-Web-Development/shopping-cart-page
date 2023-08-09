function toogleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const children = cartWrapper.children;
    const cardEmptySign = document.querySelector('[data-cart-empty]')

    if (children.length) {
        cardEmptySign.classList.add('none')
    } else {
        cardEmptySign.classList.remove('none')
    }
    
}

export default toogleCartStatus;