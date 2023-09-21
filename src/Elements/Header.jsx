import { useEffect, useState } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../shared/contexts/useAuth';

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
        console.log('header:', storedUser)
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
            <Link to={currentUser ? '/directory' : '/'}>
                <h1>Bellwines</h1>
            </Link>

            {!!currentUser && <> <h3>{currentUser.fullName}'s Account</h3> </>}

            <NavLink to={currentUser ? '/directory' : '/landing'}>Directory</NavLink>
            <NavLink to={currentUser ? '/pets' : '/landing'}>Meet the Pets</NavLink>
            <NavLink to={currentUser ? '/requests' : '/landing'}>Maintenance Requests</NavLink>
            <NavLink to={currentUser ? '/admin' : '/directory'} > Admin</NavLink>

            {!!currentUser && <button onClick={handleLogout}>Logout</button>}
            {/* {!!currentUser && <>Hi {currentUser}</>} */}
            {/* <LinksWrapper>
                    <PrimaryLink to="landing">landing</PrimaryLink>
                    <SecondaryLink to="hello">I should be pink</SecondaryLink>
                </LinksWrapper>

            </HeaderContainer> */}
        </>
    )
}

