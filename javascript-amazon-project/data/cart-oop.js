function Cart(localStorageKey) {
    const cart = { 
    cartItems: undefined,

    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)); // this always gives the outer object name
        
        if (!this.cartItems) { // If the cart is empty/null then we will give it a default cart
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }];
        }
    },

    saveToStorage() {
        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems)); // 1st param is the name we want to save 2nd param is the 'thing' in this case the cart map that we want to save in but we need to convert it to a JSON.stringify file first
    },

    addToCart(productId) {// productId from the dataset variable
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => { // the keys for cart map is going to be named cartItem
            if (productId === cartItem.productId) { // if the product name matches 
                matchingItem = cartItem;
            }
        });
    
        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            this.cartItems.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1',
        });
        }
        this.saveToStorage(); // whenever we update the cart it will be saved onto local storage
    },

        // we are going to pass the productId as a parameter
        // we are going to push everything to the new cart except the productId
        // cart will equal to the newCart
        removeFromCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;
        this.saveToStorage(); // whenever we update the cart it will be saved onto local storage
    },

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => { // the keys for cart map is going to be named cartItem
            if (productId === cartItem.productId) { // if the product name matches 
                matchingItem = cartItem;
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }
};
    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();


businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);