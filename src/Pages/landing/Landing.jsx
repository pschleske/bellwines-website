import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Flex, Button, Input, FormLabel, FormControl } from '@chakra-ui/react';
// import { useDisclosure, Modal, ModalBody, ModalOverlay, ModalCloseButton, ModalHeader, ModalContent, ModalFooter } from '@chakra-ui/react';
// import { Tile } from '../shared/styledComponents';
import { useAuth } from '../../shared/contexts/useAuth';

export const Landing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    const [fullName, setFullName] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState();
    const { currentUser, setCurrentUser } = useAuth();

    // const { onClose, onOpen, isOpen } = useDisclosure()


    // console.log(1111111111, useAuth())

    const handleFormSubmit = event => {
        event.preventDefault()
        // useEffect(() => {
        axios
            .post(register ? '/api/register' : '/api/login', {
                fullName,
                apartmentNumber,
                email,
                password
            })
            .then(res => {
                const userData = res.data
                console.log(11111, userData)
                setCurrentUser(userData.fullName)
                // console.log()
                localStorage.setItem('user', JSON.stringify(userData))
                console.log(22222, localStorage)
                // dispatch redux to put the userId on global state, then redirect user to home page
            }).catch((err => console.log(err)))
        // }, [])
    }

    return (
        <>
            {register ? (

                <form onSubmit={event => handleFormSubmit(event)} >

                    <h3>Please Register</h3>

                    <label htmlFor="full-name">Full Name</label>
                    <input
                        id="full-name"
                        width={500}
                        value={fullName}
                        onChange={event => setFullName(event.target.value)} />
                    <label htmlFor="apartmentNumber">Apt #</label>
                    <input
                        id='apartment-number'
                        value={apartmentNumber}
                        onChange={event => setApartmentNumber(event.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input
                        id='email'
                        value={email}
                        onChange={event => setEmail(event.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                    <button> Sign Up! </button>

                </form >

            ) : (

                <form onSubmit={event => handleFormSubmit(event)} >
                    <h3>Login!</h3>
                    <label htmlFor='email'> Email </label>
                    <input
                        id='email'
                        value={email}
                        onChange={event => setEmail(event.target.value)} />
                    <label htmlFor='password'> Password </label>
                    <input
                        id='password'
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                    <button> Login </button>
                </form >
            )}
            <button onClick={() => setRegister(!register)}>
                Need to {register ? "login?" : "register?"}
            </button>
        </>
    )
}


// what was worked on Wednesday sep 13
// return register ? (
//     <Flex justify="center" align="center" height="100%">
//         <form onSubmit={event => handleFormSubmit(event)} >
//             <Flex direction="column">
//                 <h1>Please Register</h1>
//                 <FormControl>
//                     <FormLabel for="full-name">Full Name</FormLabel>
//                     <Input
//                         id="full-name"
//                         width={500}
//                         value={fullName}
//                         onChange={event => setFullName(event.target.value)} />
//                 </FormControl>
//                 <label for="apartmentNumber">Apt #</label>
//                 <Input
//                     value={apartmentNumber}
//                     onChange={event => setApartmentNumber(event.target.value)} />

//                 <Input
//                     value={email}
//                     onChange={event => setEmail(event.target.value)} />
//                 <Input
//                     value={password}
//                     onChange={event => setPassword(event.target.value)} />
//                 <button> Sign Up! </button>
//             </Flex>
//             <Button onClick={onOpen}>Click me</Button>
//         </form >



//         <Modal isOpen={isOpen} onClose={onClose} size="2xl">
//             <ModalOverlay />
//             <ModalContent>
//                 <ModalCloseButton />
//                 <ModalHeader>I'm the header</ModalHeader>
//                 <ModalBody>I'm the body</ModalBody>
//                 <ModalFooter>I'm the footer</ModalFooter>
//             </ModalContent>
//         </Modal>

//     </Flex>


// ) : (
//     // return (
//     <form onSubmit={event => handleFormSubmit(event)} >
//         <h1>Login!</h1>
//         <label htmlFor='email'> Email </label>
//         <input
//             id='email'
//             value={email}
//             onChange={event => setEmail(event.target.value)} />
//         <label htmlFor='password'> Password </label>
//         <input
//             id='password'
//             type="password"
//             value={password}
//             onChange={event => setPassword(event.target.value)} />
//         <button> Login </button>
//     </form >
// )
// }
