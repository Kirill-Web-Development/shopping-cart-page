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
    `
}

export default renderProducts;