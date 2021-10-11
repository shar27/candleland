(function() {
    var stripe = Stripe('pk_test_51JjTexL4d2uPnHnU1OBXGS23jFVO56TrbKbj0ZEWPDAHRt0bKZvXmr8xm2BZ6owrT5WqvXxkkiMdP3LtCwlUGCjQ00WT6XWcIi');
  
    var checkoutButton = document.getElementById('checkout-button-price_1JjThkL4d2uPnHnU2oJH7eer');
    checkoutButton.addEventListener('click', function () {
      /*
       * When the customer clicks on the button, redirect
       * them to Checkout.
       */
      stripe.redirectToCheckout({
        lineItems: [{price: 'price_1JjThkL4d2uPnHnU2oJH7eer', quantity: 1}],
        mode: 'payment',
        /*
         * Do not rely on the redirect to the successUrl for fulfilling
         * purchases, customers may not always reach the success_url after
         * a successful payment.
         * Instead use one of the strategies described in
         * https://stripe.com/docs/payments/checkout/fulfill-orders
         */
        successUrl: 'https://example.com/success',
        cancelUrl: 'https://example.com/canceled',
      })
      .then(function (result) {
        if (result.error) {
          /*
           * If `redirectToCheckout` fails due to a browser or network
           * error, display the localized error message to your customer.
           */
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    });
  })();