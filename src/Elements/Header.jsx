// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../shared/contexts/useAuth';

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
    // const { currentUser, setCurrentUser } = useAuth()

    return (
        <>
            {/* <HeaderContainer> */}
            <h1>Bellwines</h1>


            {/* {!!currentUser && <>Hi {currentUser}</>} */}
            {/* <LinksWrapper>
                    <PrimaryLink to="landing">landing</PrimaryLink>
                    <SecondaryLink to="hello">I should be pink</SecondaryLink>
                </LinksWrapper>

            </HeaderContainer> */}
        </>
    )
}

