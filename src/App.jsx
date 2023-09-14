import { Routes, Route } from 'react-router-dom';
// import { Box } from '@chakra-ui/react'
// import { ChakraProvider } from '@chakra-ui/react'

import { Landing } from './Pages/Landing.jsx';
import { Header } from './Elements/Header'
// import { AuthProvider } from './shared/contexts/useAuth'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Landing />} />
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