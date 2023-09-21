import { Routes, Route, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Box } from '@chakra-ui/react'
// import { ChakraProvider } from '@chakra-ui/react'

import { Header } from './Elements/Header';
import { Footer } from './Elements/Footer';
import { Landing } from './Pages/landing/Landing';
import { Directory } from './Pages/directory/Directory';
import { Pets } from './Pages/pets/Pets';
import { Requests } from './Pages/requests/Requests';
import { Admin } from './Pages/Admin'
// import { Home } from './Pages/Home';
import { AuthProvider } from './shared/contexts/useAuth';
import { useAuth } from './shared/contexts/useAuth';

function App() {
  const { currentUser } = useAuth();

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route index element={currentUser ? <Navigate to='/directory' /> : <Landing />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/' />
          <Route path='/directory' element={<Directory />}
          />
          <Route path='/pets' element={<Pets />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        <Footer />
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