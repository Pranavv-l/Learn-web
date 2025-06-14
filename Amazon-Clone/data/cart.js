export let cart = JSON.parse(localStorage.getItem('cart')); 
if(!cart){
    cart = [];
}
export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}
export function deleteItem(id){
    let newCart = [];
    cart.forEach(item => {
        if(item.productId != id){
            newCart.push(item)
        }
    })
    cart = newCart;
    saveToStorage()
}
 