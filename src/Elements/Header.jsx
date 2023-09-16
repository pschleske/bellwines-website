import { useEffect } from 'react';
// import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
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
    useEffect(() => {
        const handleSession = () => {
            if (!!currentUser) {
                localStorage.setItem(currentUser)
            }
        }
        handleSession();
    }, [])

    const handleLogout = () => {
        localStorage.removeItem(currentUser)
        setCurrentUser('');
    }

    console.log(currentUser)

    return (
        <>
            {/* <HeaderContainer> */}
            <Link to='/'>
                <h1>Bellwines</h1>
            </Link>

            {!!currentUser && <> <h3>{currentUser}`s Account</h3> </>}

            <NavLink to='/directory'>Directory</NavLink>
            <NavLink to='/pets'>Meet the Pets</NavLink>
            <NavLink to='/requests  '>Maintenance Requests</NavLink>

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

