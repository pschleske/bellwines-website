import { Routes, Route, Navigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';
import { useState, useEffect } from 'react';
// import { Box } from '@chakra-ui/react'
// import { ChakraProvider } from '@chakra-ui/react'

import { Header } from './Elements/Header';
import { Footer } from './Elements/Footer';
import { Landing } from './Pages/landing/Landing';
import { Directory } from './Pages/directory/Directory';
import { Pets } from './Pages/pets/Pets';
import { Requests } from './Pages/requests/Requests';
import { Calendar } from './Pages/Calendar';
import { PaymentPortal } from './Pages/PaymentPortal';
import { PaymentSuccess } from './Pages/PaymentSuccess';
// import { Admin } from './Pages/Admin'
// import { Home } from './Pages/Home';
import { AuthProvider } from './shared/contexts/useAuth';
import { useAuth } from './shared/contexts/useAuth';

const stripePromise = loadStripe("pk_test_51NuLfSHrrNngtjIf589yP4IlyJibp5PcEvBujtKFrsQxMC0vZThfMT3P99LHKIdWqFJ6rIHfvWUJ2RimO9n8j3D800I1OZuAdl");

function App() {
  const { currentUser } = useAuth();

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <AuthProvider>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <Header />
            <Routes>
              <Route index element={currentUser ? <Navigate to='/directory' /> : <Landing />} />
              <Route path='/landing' element={<Landing />} />
              <Route path='/' />
              <Route path='/directory' element={<Directory />}
              />
              <Route path='/pets' element={<Pets />} />
              <Route path='/requests' element={<Requests />} />
              {/* <Route path='/admin' element={<Admin />} /> */}
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/payments' element={<PaymentPortal />} />
              <Route path='/payment-success' element={<PaymentSuccess />} />
            </Routes>
            <Footer />
          </Elements>
        )}
      </AuthProvider>
    </>
  )
}

export default App


//refer to bottom for styling
// return (
//   <Box height="calc(100vh - 80px)">
//     <ChakraProvider>

//       <AuthProvider>
//         <Header />
//         <Routes>
//           <Route index element={<Landing />} />
//         </Routes>
//       </AuthProvider>
//     </ChakraProvider>
//   </Box>
// )