import { Container, Flex, IconButton, FormControl, FormLabel, Input, Button, Heading } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import { CloseIcon } from "@chakra-ui/icons"
import { useEffect, useState } from "react";
import axios from "axios";

export const Profile = () => {

    const [profile, setProfile] = useState([])
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [imgUrl, setImgUrl] = useState()
    const [email, setEmail] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/profile');
                // console.log(1111, response.data)
                setProfile(response.data);
            } catch (error) {
                console.error('Error getting the directory:', error);
            }
        };

        fetchData();
    }, []);
    // console.log(2222, profile)
    const updateProfile = async () => {

        let bodyObj = {
            firstName,
            lastName,
            imgUrl,
            email
        }
        const { data } = await axios.put(`/api/save-profile/${profile.userId}`, bodyObj)
        if (!data.error) {
            setProfile(bodyObj)
            useNavigate('/directory')
        } else {
            console.log(error)
            alert('Something went wrong!')
        }
    }

    return (
        <>
            <Heading marginTop='3%' marginLeft='6%' size='lg' color='gray.600' >Profile</Heading>
            <Container border='1px' borderColor='gray.100' borderRadius='10px' marginTop='6vh' width='500px' height='650px' boxShadow='md' p='6' rounded='md' bg='white'>
                <Flex justify='flex-end'>
                    <IconButton
                        icon={<CloseIcon />}
                        size='sm'
                        onClick={() => navigate('/directory')} />
                </Flex>
                <Flex justify="center" align="center" height="100%" flexDirection='column' justifyItems='space-around' >
                    <form key={profile.userId}>
                        <FormControl>
                            <FormLabel htmlFor="">First Name:</FormLabel>
                            <Input
                                type="text"
                                value={profile.firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </FormControl>
                        <br />
                        <FormControl>
                            <FormLabel htmlFor="">Last Name:</FormLabel>
                            <Input
                                type="text"
                                value={profile.lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </FormControl>
                        <br />
                        <FormControl>
                            <FormLabel htmlFor="">Photo:</FormLabel>
                            <Input
                                type="text"
                                value={profile.imgUrl}
                                onChange={(event) => setImgUrl(event.target.value)}
                            />
                        </FormControl>
                        <br />
                        <FormControl>
                            <FormLabel htmlFor="">Email:</FormLabel>
                            <Input
                                type="text"
                                value={profile.email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </FormControl>
                        <br />
                        {/* <FormControl>
                            <FormLabel htmlFor="">Password:</FormLabel>
                            <Input
                                type="text"
                            // value={description}
                            // onChange={(event) => setDescription(event.target.value)}
                            />
                        </FormControl>
                        <br /> */}
                        <Flex justifyContent='center'>
                            {/* <PetAddButton onClick={(event) => addPet(event)} /> */}
                            <Button
                                onClick={(event) => updateProfile(event)}
                                colorScheme='whatsapp'
                                size='md'> Update Profile </Button>
                        </Flex>
                    </form >
                </Flex>
            </Container >
        </>
    )
}
