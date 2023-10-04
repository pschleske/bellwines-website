import { useEffect, useState } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../shared/contexts/useAuth';
import {
    Flex, Box, Spacer, Heading,
    Tabs, TabList, Tab,
    Button
} from '@chakra-ui/react';

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
                        <Heading size='lg'>Bellwines</Heading>
                    </Link>
                </Box>
                <Spacer />

                {!!currentUser && <> <Heading size='sm'>{currentUser.firstName}'s Account</Heading> </>}

                <Spacer />
                <Tabs align='end' variant='enclosed' isLazy>
                    <TabList>
                        <Tab><NavLink to={currentUser ? '/directory' : '/landing'}>Directory</NavLink></Tab>
                        <Tab><NavLink to={currentUser ? '/pets' : '/landing'}>Meet the Pets</NavLink></Tab>
                        <Tab><NavLink to={currentUser ? '/requests' : '/landing'}>Maintenance Requests</NavLink></Tab>
                        <Tab><NavLink to={currentUser ? '/calendar' : '/landing'}>Calendar</NavLink></Tab>
                        <Tab><NavLink to={currentUser ? '/payments' : '/landing'}>Payment Portal</NavLink></Tab>
                        {/* <NavLink to={currentUser ? '/admin' : '/directory'} > Admin</NavLink> */}
                    </TabList>
                </Tabs>

                {!!currentUser && <Button variant='outline' colorScheme='blue' onClick={handleLogout}>Logout</Button>}
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

