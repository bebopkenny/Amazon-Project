import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() { // async = makes a function return a promise

    await loadProductsFetch(); // await lets us write asynchronous code like normal code

    const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value3');
        });
    });

    renderOrderSummary();
    renderPaymentSummary();

}

loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

// resolve is a function
// - similar to done() function
// - lets us control when to go to the next step

/*
new Promise((resolve) => { // it will run right away // console.log('start promise')
    loadProducts(() => { // console.log('finished loading')
        resolve('value1'); // call resolve to go on the next step
    });

}).then((value) => { // resolve makes it to the next step // console.log('next step')
    console.log(value);
    
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary(); 
});
*/

/*
loadProducts(() => {
    loadCart(() => {

    });
});
*/

/*
Promise.all([
    new Promise((resolve) => { // it will run right away // console.log('start promise')
        loadProducts(() => { // console.log('finished loading')
            resolve('value1'); // call resolve to go on the next step
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/