import React, { useState, useEffect } from "react";
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';
import { TableContainer, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, Flex, Container, TableCaption, Spacer, Button } from "@chakra-ui/react";

import './paymentPortal.css';

export const PaymentPortal = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "http://localhost:4545/payment-success",
                receipt_email: email,
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <>

            <Flex marginTop='3%' marginLeft='6%'>
                <Heading size='lg' color='gray.600' borderBottom='1px' borderColor='gray.100' > Payment Portal </Heading>
            </Flex>
            <Container colorscheme='gray' border='1px solid' borderColor='gray.100' borderRadius='10px' boxShadow='lg' marginTop='5vh'>
                <br />
                <Flex justifyContent='center'>
                    <Heading size='md'>Monthly Rent</Heading>
                </Flex>
                <br />
                <Flex>
                    <Container colorscheme='gray' border='1px solid' borderColor='gray.100' borderRadius='10px'>
                        <div className="App">
                            {/* <form id="payment-form" onSubmit={handleSubmit}> */}
                            <form id="payment-form">
                                <br />
                                <LinkAuthenticationElement
                                    id="link-authentication-element"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <PaymentElement id="payment-element" options={paymentElementOptions} />
                                <br />
                                <Flex justifyContent='center'>
                                    <Button onClick={handleSubmit} disabled={isLoading || !stripe || !elements} id="stripeBtn" colorScheme='facebook'>
                                        <span id="button-text">
                                            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay $1,650"}
                                        </span>
                                    </Button>
                                </Flex>
                                <br />
                                {/* Show any error or success messages */}
                                {message && <div id="payment-message">{message}</div>}
                            </form>
                            <br />
                        </div>
                    </Container>
                </Flex>
                <br />
                <Flex justifyContent="center" marginTop='2vh'>
                    <Container colorscheme='gray' border='1px solid' borderColor='gray.100' borderRadius='10px'>
                        <TableContainer>
                            <Table variant='simple'>
                                <TableCaption>
                                    *Automatic monthly payments are not yet available
                                    <Spacer />
                                    *This payment will only process once
                                </TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Invoice Items</Th>
                                        <Th>Amount</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Rent:</Td>
                                        <Td>$1,500</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Parking:</Td>
                                        <Td>$50</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Internet:</Td>
                                        <Td>$50</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Pet Rent:</Td>
                                        <Td>$50</Td>
                                    </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Td><Heading size='sm'>Total:</Heading></Td>
                                        <Td key="total" value={1650}><Heading size='sm'>$1,650</Heading></Td>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </Container>
                </Flex>
                <br />
            </Container >
        </>
    )
}
