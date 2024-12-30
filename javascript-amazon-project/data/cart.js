export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
}];

export function addToCart(productId) {// productId from the dataset variable
    let matchingItem;

    cart.forEach((cartItem) => { // the keys for cart map is going to be named cartItem
        if (productId === cartItem.productId) { // if the product name matches 
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
        productId: productId,
        quantity: 1,
    });
    }
}