import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Flex, Button, Input, FormLabel, FormControl, Heading, Container, Spacer } from '@chakra-ui/react';
// import { useDisclosure, Modal, ModalBody, ModalOverlay, ModalCloseButton, ModalHeader, ModalContent, ModalFooter } from '@chakra-ui/react';
// import { Tile } from '../shared/styledComponents';
import { useAuth } from '../../shared/contexts/useAuth';

export const Landing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [imgUrl, setImgUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png')
    const [apartmentNumber, setApartmentNumber] = useState();

    const { currentUser, setCurrentUser } = useAuth();
    let navigate = useNavigate();

    // const { onClose, onOpen, isOpen } = useDisclosure()


    // console.log(1111111111, useAuth())

    const handleFormSubmit = event => {
        event.preventDefault()

        // useEffect(() => {
        axios
            .post(register ? '/api/register' : '/api/login', {
                firstName,
                lastName,
                imgUrl,
                apartmentNumber,
                email,
                password
            })
            .then(res => {
                const userData = res.data
                // console.log(11111, userData)
                // setCurrentUser(console.log(userData.fullName))
                setCurrentUser(userData.firstName)
                // console.log()
                localStorage.setItem('user', JSON.stringify(userData))
                // console.log(22222, localStorage)
                navigate('/directory')
                window.location.reload()
                // dispatch redux to put the userId on global state, then redirect user to home page
            }).catch((err => console.log(err)))
        // }, [])
    }

    return (
        <>
            {register ? (
                <Container border='1px' borderColor='gray.100' borderRadius='10px' marginTop='4vh' width='30%' height='50%' boxShadow='md' p='6' rounded='md' bg='white'>
                    <form  >
                        <Flex justify="center" align="center" height="100%" flexDirection='column' justifyItems='space-around' >
                            <br />
                            <Heading size='lg'>Please Register</Heading>
                            <br />
                            <FormControl isRequired>
                                <FormLabel htmlFor="first-name">First Name</FormLabel>
                                <Input
                                    variant='flushed'
                                    id="first-name"
                                    value={firstName}
                                    onChange={event => setFirstName(event.target.value)} />
                            </FormControl>
                            <br />
                            <FormControl isRequired>
                                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                                <Input
                                    variant='flushed'
                                    id="last-name"
                                    value={lastName}
                                    onChange={event => setLastName(event.target.value)} />
                            </FormControl>
                            <br />
                            <FormControl>
                                <FormLabel htmlFor="profile-pic">Add a profile pic!</FormLabel>
                                <Input
                                    variant='flushed'
                                    id="profile-pic"
                                    value={imgUrl}
                                    onChange={event => setImgUrl(event.target.value)} />
                            </FormControl>
                            <br />
                            <FormControl isRequired>
                                <FormLabel htmlFor="apartmentNumber">Apt #</FormLabel>
                                <Input
                                    variant='flushed'
                                    id='apartment-number'
                                    width={100}
                                    value={apartmentNumber}
                                    onChange={event => setApartmentNumber(event.target.value)} />
                            </FormControl>
                            <br />
                            <FormControl isRequired>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    variant='flushed'
                                    id='email'
                                    value={email}
                                    onChange={event => setEmail(event.target.value)} />
                            </FormControl>
                            <br />
                            <FormControl isRequired>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input
                                    variant='flushed'
                                    id='password'
                                    type='password'
                                    value={password}
                                    onChange={event => setPassword(event.target.value)} />
                            </FormControl>
                            <br />
                            <Button
                                onClick={event => handleFormSubmit(event)}
                                colorScheme='blue' size='md'> Sign Up! </Button>
                            <br />
                        </Flex>
                    </form >
                </Container>

            ) : (

                <Container border='1px' borderColor='gray.100' borderRadius='10px' marginTop='10vh' width='400px' height='400px' boxShadow='md' p='6' rounded='md' bg='white'>
                    <form onSubmit={event => handleFormSubmit(event)} >
                        <Flex justify="center" align="center" height="100%" flexDirection='column' justifyItems='space-around' >
                            <br />
                            <Heading size='lg'>Login!</Heading>
                            <br />
                            <FormControl isRequired>
                                <FormLabel htmlFor='email'> Email </FormLabel>
                                <Input
                                    id='email'
                                    value={email}
                                    onChange={event => setEmail(event.target.value)} />
                            </FormControl>
                            <br />
                            <FormControl isRequired>
                                <FormLabel htmlFor='password'> Password </FormLabel>
                                <Input
                                    id='password'
                                    type="password"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)} />
                            </FormControl>
                            <br />
                            <br />
                            <Button
                                onClick={event => handleFormSubmit(event)}
                                colorScheme='blue'> Login </Button>
                        </Flex>
                    </form >
                </Container>
            )
            }
            <br />
            <Flex justifyContent="center" mt="2">
                <Button variant='outline' onClick={() => setRegister(!register)}>
                    Need to {register ? "login?" : "register?"}
                </Button>
            </Flex>
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
