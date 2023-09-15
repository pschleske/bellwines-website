import { Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Box } from '@chakra-ui/react'
// import { ChakraProvider } from '@chakra-ui/react'

import { Header } from './Elements/Header'
import { Landing } from './Pages/Landing';
import { Directory } from './Pages/Directory';
import { Pets } from './Pages/Pets';
import { Requests } from './Pages/Requests';
// import { Home } from './Pages/Home';
// import { AuthProvider } from './shared/contexts/useAuth'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/' />
        <Route path='/directory' element={<Directory />}
        />
        <Route path='/pets' element={<Pets />} />
        <Route path='/requests' element={<Requests />} />
      </Routes>
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