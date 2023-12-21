import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const STRIPE_KEY =
  'pk_test_51OPNkJSEd1DOP8GilJhwOK4jCfhe5bXYANYQxLVmlVJqyYdp4kxl4UfrdZnkixIM5WEZpaaG3syNJXDxKZoUhjqo00Ij9Nisxv';
const Container = styled.div``;
const Button = styled.button`
  width: 100%;
  premoveing: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Payments = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = axios.post('http://localhost:5000/api/checkout/payments', {
          tokenId: stripeToken.id,
          amount: 100,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <Container>
      <StripeCheckout
        name="P G."
        billingAddress
        shippingAddress
        alipay={true}
        bitcoin={true}
        token={onToken}
        stripeKey={STRIPE_KEY}
        amount={100}
        description="you better pay or else!"
      >
        <Button>CHECKOUT</Button>
      </StripeCheckout>
    </Container>
  );
};

export default Payments;
