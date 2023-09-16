import { createContext, useContext, useState } from "react";


const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');

    return (
        <AuthContext.Provider value={{
            currentUser,
            setCurrentUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        console.log('Component should be wrapped in AuthProvider')
        return
    }

    return context
}


 // useEffect(() => {
    //     const checkLoggedIn = async () => {
    //         let authUser = ();
    //         if (authUser) {
    //             localStorage.setItem(res.data);
    //             // authUser = '';
    //         }

    //         setCurrentUser(authUser);
    //     };

    //     checkLoggedIn();
    // }, []);

    // console.log('usercontext', currentUser);