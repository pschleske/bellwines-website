import { useEffect, useState } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../shared/contexts/useAuth';
import {
    Flex, Box, Spacer, Heading, Tabs, TabList, Tab, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Image
} from '@chakra-ui/react';
import { AtSignIcon, ChevronDownIcon } from '@chakra-ui/icons';

// const HeaderContainer = styled.div`
//   height: 80px;
//   border-bottom: 1px solid black;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 32px;
// `

// const LinksWrapper = styled.div`
//     display: flex;
//     gap: 16px;
// `

// const PrimaryLink = styled(Link)`
//     text-decoration: none;
//     color: black;
// `

// const SecondaryLink = styled(PrimaryLink)`
//     color: pink;
// `


export const Header = () => {
    const { currentUser, setCurrentUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        // console.log('header:', storedUser)
        const userObj = JSON.parse(storedUser)
        if (storedUser) {
            setCurrentUser(userObj);
        }
    }, []);

    const handleLogout = async () => {
        //axios request to destroy session
        const response = await axios.delete('/api/logout')
        localStorage.removeItem('user')
        setCurrentUser('');
        navigate('/landing')
    }

    // console.log('Header currentUser:', currentUser)

    return (
        <>
            {/* <HeaderContainer> */}
            <Flex minWidth='max-content' alignItems='center' gap='2' h='100px' borderBottom='1px' borderColor='gray.100'>
                <Box p='2'>
                    <Link to={currentUser ? '/directory' : '/'}>
                        <Flex justifyContent='center' alignItems='center'>
                            <Image src='https://cdn-icons-png.flaticon.com/512/5988/5988529.png' alt='apartments' isRound boxSize='60px' />
                            <Heading size='lg' color='blue.700'>
                                Bellwines Apartments
                                {/* <IconButton colorScheme='blue' variant='outline' size='md' icon={<AtSignIcon />} />  Bellwines Apartments */}
                            </Heading>
                        </Flex>
                    </Link>
                </Box>
                <Spacer />

                {/* {!!currentUser && <> <Heading size='sm'>{currentUser.firstName}'s Account</Heading> </>} */}

                <Spacer />
                <Tabs align='end' variant='soft-rounded' isLazy>
                    <TabList>
                        <Tab><NavLink to={currentUser ? '/directory' : '/landing'}>Directory</NavLink></Tab>
                        <Tab><NavLink to={currentUser ? '/pets' : '/landing'}>Meet the Pets</NavLink></Tab>
                        <Tab><NavLink to={currentUser ? '/requests' : '/landing'}>Maintenance Requests</NavLink></Tab>
                        <Tab><NavLink to={currentUser ? '/calendar' : '/landing'}>Event Calendar</NavLink></Tab>
                        <Tab><NavLink to={currentUser ? '/payments' : '/landing'}>Payment Portal</NavLink></Tab>
                        {/* <NavLink to={currentUser ? '/admin' : '/directory'} > Admin</NavLink> */}
                    </TabList>
                </Tabs>

                {/* {!!currentUser && <Button variant='outline' colorScheme='blue' onClick={handleLogout}>Logout</Button>} */}
                {!!currentUser && <Menu>
                    <MenuButton as={Button} backgroundColor='blue.50' px={4} py={2} transition='all 0.2s' borderRadius='md' _hover={{ bg: 'blue.100' }} _expanded={{ bg: 'blue.400' }} _focus={{ boxShadow: 'outline' }} >
                        {currentUser.firstName} {currentUser.lastName} <ChevronDownIcon />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Button variant='ghost' colorScheme='blue' onClick={handleLogout}>Logout</Button>
                        </MenuItem>
                    </MenuList>
                </Menu>}
                <br />
                {/* {!!currentUser && <>Hi {currentUser}</>} */}
                {/* <LinksWrapper>
                    <PrimaryLink to="landing">landing</PrimaryLink>
                    <SecondaryLink to="hello">I should be pink</SecondaryLink>
                </LinksWrapper>

            </HeaderContainer> */}
            </Flex>
        </>
    )
}

