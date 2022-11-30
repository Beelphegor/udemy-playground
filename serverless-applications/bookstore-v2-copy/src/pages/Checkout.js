import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51KxuEMA4RybBkSlUaNv6mQou046F55Px8X26Q3D2LZ7j1W156C0gUNGH67J2RvqEL4AKxwElz0qKSZ9gM2JGcXbX00kFsNFyPq"
  );

  return (
    <section className="checkout-wrapper">
      <Authenticator>
        <Elements stripe={stripePromise}>
          <section>
            <h2>Time to Checkout?</h2>
            <CheckoutForm />
          </section>
        </Elements>
      </Authenticator>
    </section>
  );
};

export default Checkout;
