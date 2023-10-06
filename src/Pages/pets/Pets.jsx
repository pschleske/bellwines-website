import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Box, Flex, TabPanel, Tabs, TabPanels, Button, FormControl, FormLabel, Input, Container, Heading } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { IconButton, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

// import image from '../shared/img123.jpg'
import { PetAddButton } from './PetAddButton';
import { Pet } from './Pet';
import { useAuth } from '../../shared/contexts/useAuth'

export const Pets = () => {
    const [petData, setPetData] = useState([]);
    const [showAddPet, setShowAddPet] = useState(false)

    const [name, setName] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [description, setDescription] = useState('')

    const [showAlert, setShowAlert] = useState(false)

    const { currentUser, setCurrentUser } = useAuth()

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        // console.log('pets:', storedUser)
        const userObj = JSON.parse(storedUser)
        if (storedUser) {
            setCurrentUser(userObj);
        }
    }, []);
    // console.log(currentUser)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/pets');
                setPetData(response.data);
            } catch (error) {
                console.error('Error getting pets:', error);
            }
        };

        fetchData();
    }, []);

    const addPet = async (event) => {
        event.preventDefault()
        console.log('hit ADD PET!!!!!!')
        try {
            if (!name || !imgUrl || !description) {
                setShowAlert('true')
                // alert('Please fill out all fields before adding a pet')
                return;
            }

            let { data } = await axios.post('/api/new-pet', {
                name,
                imgUrl,
                description
            })
            setPetData([...petData, data])
            setShowAddPet(false)
            setName('')
            setImgUrl('')
            setDescription('')
        } catch (error) {
            console.error('Error adding pet:', error)
        }
    }

    const deletePet = async (id) => {
        const { data } = await axios.delete(`/api/pet/${id}`)
        if (!data.error) {
            const filteredPets = petData.filter(element => element.petId !== id)
            setPetData(filteredPets)
        }
    }

    // const cards = petData.map((petItem) => {
    //     const { id, name, imgUrl, description } = petItem

    //     return (
    //         <div key={petItem.petId}>
    //             <Pet
    //                 id={petItem.petId}
    //                 initialPetData={{ name: petItem.name, imgUrl: petItem.imgUrl, description: petItem.description }}
    //                 initialIsEditing={false}
    //                 deleteFunc={() => deletePet(petItem.petId)}
    //             />
    //         </div>
    //     )
    // })

    // to do:
    // add a show ADD pet state
    // create form and conditionally render based on showAdd pet state 
    if (showAddPet === true) {
        return (
            <>
                {showAlert && (
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>Error!</AlertTitle>
                        <AlertDescription>Please fill out all fields before creating pet</AlertDescription>
                    </Alert>
                )}
                <Container border='1px' borderColor='gray.100' borderRadius='10px' marginTop='10vh' width='450px' height='550px' boxShadow='md' p='6' rounded='md' bg='white'>
                    <Flex justify='flex-end'>
                        <IconButton onClick={() => { setShowAddPet(false); setShowAlert(false) }} icon={<CloseIcon />} size='sm' />
                    </Flex>
                    <Flex justify="center" align="center" height="100%" flexDirection='column' justifyItems='space-around' >
                        <form >
                            <FormControl>
                                <FormLabel htmlFor="">Pet Name:</FormLabel>
                                <Input
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </FormControl>
                            <br />
                            <FormControl>
                                <FormLabel htmlFor="">Photo:</FormLabel>
                                <Input
                                    type="text"
                                    value={imgUrl}
                                    onChange={(event) => setImgUrl(event.target.value)}
                                />
                            </FormControl>
                            <br />
                            <FormControl>
                                <FormLabel htmlFor="">Tell us about your pet:</FormLabel>
                                <Input
                                    type="text"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                />
                            </FormControl>
                            <br />
                            <Flex justifyContent='center'>
                                {/* <PetAddButton onClick={(event) => addPet(event)} /> */}
                                <Button onClick={(event) => addPet(event)} colorScheme='whatsapp' size='md'> Create Pet </Button>
                            </Flex>
                        </form >
                    </Flex>
                </Container >
            </>
        )
    }

    //TO DO: ADD AN X BUTTON ON FORM ABOVE, TO ENABLE USERS TO GO BACK TO THE LIST OF PETS. BUTTON WILL SET SHOWADDPET TO FALSE AND RENDER THE LLIST OF PETS 
    // At the moment the only way to get out of this page is by clicking on a different link such as directory and then back to pets 

    return (
        <>

            <Flex marginTop='3%' marginLeft='6%' justifyContent='space-between' marginRight='5%'>
                <Heading size='lg' color='gray.600' borderBottom='1px' borderColor='gray.100' > Meet the Pets </Heading>
                <PetAddButton addClick={() => setShowAddPet(true)} />
            </Flex>
            <Tabs>
                <TabPanels>
                    <TabPanel>

                        {/* <Flex justifyContent='flex-end' marginRight='3%'>

                            <PetAddButton addClick={() => setShowAddPet(true)} />

                        </Flex> */}
                        <Flex flexWrap='wrap' justify='space-around'>
                            {petData.map((petItem) => (
                                <Box key={petItem.petId} width='calc(45% - 10px)'>
                                    <br />
                                    <Card direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        variant='outline'
                                        marginBottom='4'>
                                        <Pet
                                            key={petItem.petId}
                                            id={petItem.petId}
                                            initialPetData={{
                                                userId: petItem.userId,
                                                name: petItem.name,
                                                imgUrl: petItem.imgUrl,
                                                description: petItem.description,
                                            }}
                                            initialIsEditing={false}
                                            deleteFunc={() => deletePet(petItem.petId)}
                                            currentUserData={currentUser.userId}
                                        />
                                    </Card>
                                </Box>
                            ))}
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            {/* {console.log(9999, currentUser.userId)} */}
        </>
    )
}



// return (
//     <div>
//         <h3>PETS</h3>
//         <button onClick={handleAdd}>Add Pet</button>
//         <ul>
//             {petData.map((item) => (
//                 <li key={item.petId}>
//                     <strong>Pet Name:</strong> {item.name}
//                     <img src={image} alt="" />
//                     <strong>About me:</strong> {item.description}
//                     <button onClick={handleEdit}>Edit</button> <br />
//                     <button onClick={handleDelete}>Delete</button>
//                 </li>
//             ))}
//         </ul>
//     </div>
// )