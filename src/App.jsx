import { Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Box } from '@chakra-ui/react'
// import { ChakraProvider } from '@chakra-ui/react'

import { Header } from './Elements/Header'
import { Landing } from './Pages/landing/Landing';
import { Directory } from './Pages/directory/Directory';
import { Pets } from './Pages/pets/Pets';
import { Requests } from './Pages/requests/Requests';
// import { Home } from './Pages/Home';
import { AuthProvider } from './shared/contexts/useAuth'

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/' />
          <Route path='/directory' element={<Directory />}
          />
          <Route path='/pets' element={<Pets />} />
          <Route path='/requests' element={<Requests />} />
        </Routes>
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