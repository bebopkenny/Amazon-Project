import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('Test suite: addToCart', () => {
    it('Add an existing product to the cart', () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => { // this will replace local storage with getItem
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOption: '1',
        }]);
        }); 
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); // enter how many times it should be called
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });
    
    it('Adds an new product to the cart', () => {
        spyOn(localStorage, 'setItem');
        
        spyOn(localStorage, 'getItem').and.callFake(() => { // this will replace local storage with getItem
            return JSON.stringify([]);
        }); 
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); // enter how many times it should be called
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});