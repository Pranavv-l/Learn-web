let productHtml = '';
const productEl = document.querySelector(".products-grid");
products.forEach((product) => {
    productHtml += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                ${product.priceCents / 100}
            </div>

            <div class="product-quantity-container">
                <select class="option-selector">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-cart" data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>`
})
productEl.innerHTML = productHtml;
let timeId;
document.querySelectorAll(".js-add-cart").forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const cartEl = document.querySelector(".cart-quantity")
        const valueContainer = button.closest(".product-container")
        const addedCartEl = valueContainer.querySelector(".added-to-cart")
        const option = Number(valueContainer.querySelector(".option-selector").value)
        console.log(option)
        let matchingItem;
        let cartNum =0;
        cart.forEach((item) => {
            if(item.productId === productId){
                matchingItem = item
            }
        })
        if(matchingItem){
            matchingItem.quantity += option;
        }else{
            cart.push({
                productId : productId,
                quantity : option
            })
        }
        cart.forEach(item => {
            cartNum += item.quantity
        })
        cartEl.innerHTML = cartNum;

        addedCartEl.classList.add("added-to-cart-on")
        clearTimeout(timeId)
        timeId = setTimeout(function(){addedCartEl.classList.remove("added-to-cart-on")},5000)

        console.log(cart)
    })
})


