// Include the Razorpay script in your HTML file

import {calculateTotalPrice} from './script.js'
// Create a function to initialize the payment

function initializePayment() {
  var options = {
    key: 'rzp_test_zQpaMRy7L37erO',
    key_secret:'vN2DWbx8aq5bvw33iFYUWzD6',
    amount: 0, // Amount in paise (e.g., 50000 paise = ₹500)
    currency: 'INR',
    name: 'Dive In',
    description: 'Payment for Order #123',
    image: 'https://example.com/logo.png', // URL of your logo
    handler: function(response) {
      // Callback function after successful payment
      alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
    },
    prefill: {
      name: 'Example ABC',
      email: 'john.doe@example.com',
      contact: '+91 9876543210'
    },
    notes: {
      address: 'Razorpay Corporate Office, Jaipur'
    },
    theme: {
      color: '#F37254' // Set the color of the checkout form
    }
  };
  
  var rzp = new Razorpay(options);
  rzp.open();
}

// Call the initializePayment function when the payment button is clicked
document.getElementById('paymentButton').addEventListener('click', initializePayment);
