// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext(null)

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState('Mickey Mouse');

//     return (
//         <AuthContext.Provider value={{
//             currentUser,
//             setCurrentUser
//         }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = () => {
//     const context = useContext(AuthContext)

//     if (!context) {
//         console.log('Component should be wrapped in AuthProvider')
//         return
//     }

//     return context
// }