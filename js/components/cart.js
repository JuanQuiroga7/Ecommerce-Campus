export const productsCheckout = async res => {
    console.log('productsCheckout res:', res);
    let plantilla = "";

    res.forEach(dict => {
        if(dict.checkout){
            let {data} = dict
            plantilla += /*html*/`
            <article class="details__product">
            <div class="product__image">
                <img id = "photoForDelete" src="${data.product_photo}">
            </div>
            <div class="product__description">
                <h3>${(data.product_title).slice(0, 15)}...</h3>
                <small>${data.product_star_rating == null ? 0 : data.product_star_rating}⭐</small>
                <span id="precio_Producto">$${(data.product_price).includes('$') ? (data.product_price).replace('$', ''):data.product_price}</span>
            </div>
            <div class="product__custom">
                <img src="../storage/img/tree_dot.svg">
                <div class="product__select">
                    <img id="minusCheck" src="../storage/img/minusW.svg">
                    <span id="spanCheck">1</span>
                    <img id="plusCheck" src="../storage/img/plusW.svg" alt="">
                </div>
            </div>
        </article>`;
        }
    });
    return plantilla;
};

