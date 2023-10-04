import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardBody, Text, Heading, Image, Box, Flex, Link } from '@chakra-ui/react'
// import { useAuth } from '../../shared/contexts/useAuth';


export const Directory = () => {
    const [directoryData, setDirectoryData] = useState([]);
    const [pet, setPet] = useState([]);
    // const [adminMode, setAdminMode] = useState(false);

    // const { currentUser, setCurrentUser } = useAuth()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/directory');
                setDirectoryData(response.data);
            } catch (error) {
                console.error('Error getting the directory:', error);
            }
        };

        fetchData();
    }, []);


    const getPetNames = async () => {
        try {
            const response = await axios.get('/api/pet-owners')
            // console.log(response.data)
            setPet(response.data)
        } catch (error) {
            alert('Error getting data', error)
        }
    }

    // const petData = (id) => {

    //     return pet.map((item) => {
    //         if (item.userId === id) {
    //             return (
    //                 <p key={item.petId}>{item.name}</p>
    //             )
    //         }
    //     })
    // }

    // console.log('Directory current user:', currentUser.isAdmin)
    // const isUserAdmin = () => {
    //     if (currentUser.isAdmin === true) {
    //         setAdminMode(true)
    //     }
    // }

    useEffect(() => {
        getPetNames();
    }, [])

    // useEffect(() => {
    //     isUserAdmin();
    // }, [])

    return (
        <>
            <br />
            <Flex flexWrap='wrap' gap={4} justifyContent='space-around' alignItems='center'>
                {directoryData.map((item) => (
                    <Box key={item.userId} width='calc(25% - 16px'>
                        <Card >
                            <Heading size='xs' textAlign='center'>{item.firstName} {item.lastName}</Heading>
                            <CardBody>
                                <Flex direction="column" alignItems="center" justifyContent="center" textAlign="center">
                                    <Image src={item.imgUrl} boxSize='125px' borderRadius='full' />
                                    <br />
                                    <Text fontSize='sm'>Apt: {item.apartmentNumber} </Text>
                                    {/* <Text fontSize='sm'> {item.email} </Text> */}
                                    <Link fontSize='sm' href={`mailto:${item.email}`}> {item.email} </Link>
                                    {/* <Text fontSize='xs'>Pets: {pet[0] && petData(item.userId)}</Text> */}
                                </Flex>
                            </CardBody>
                        </Card>
                    </Box>
                ))}
            </Flex>
        </>
    );

    // adminMode ? (
    //     <div>
    //         <h3>Directory</h3>
    //         <div>
    //             {directoryData.map((item) => (
    //                 <div key={item.userId}>
    //                     <img src={item.imgUrl} />
    //                     <strong>Full Name:</strong> {item.fullName} <br />
    //                     <strong>Apt #:</strong> {item.apartmentNumber}
    //                     <div><strong>Pets:</strong>{pet[0] && petData(item.userId)}</div>
    //                     <button> Edit </button> <button onClick={setAdminMode(false)}> Save </button> <button> Delete </button>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>

    // ) : 

};




