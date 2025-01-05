import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../../scripts/utils/money.js'
import { addOrder } from '../../data/orders.js';

export function renderPaymentSummary() {
    let productPriceCents = 0; // total item price
    let shippingPriceCents = 0; // total shipping ships

    cart.forEach((cartItem) => { // function that will loop through cart to ensure the product id's match
        const product = getProduct(cartItem.productId); // when the product id's match it will get saved to the variable product
        productPriceCents += product.priceCents * cartItem.quantity // priceCents will multiply by the quantity and keep getting added to the productPriceCents variable       
        
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
    });
    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;

    const paymentSummaryHTML = `
              <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary 
          js-place-order">
            Place your order
          </button>
    `;
    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

    document.querySelector('.js-place-order')
      .addEventListener('click', async () => {
        try {
          const response = await fetch('https://supersimplebackend.dev/orders', {
            method: 'POST',
            headers: { // headers give the backend more information about our request
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // actual data we will send to the backend
              cart: cart
            }) 
          });
          const order = await response.json();
          addOrder(order);
        } catch (error) {
          console.log('Unexpected error. Try again later.');
        }
        window.location.href = 'orders.html';
      });
  }

// Total for Shipping and handling
// 1. Loop through the cart
// 2. Add all the shipping costs together