import styled from 'styled-components'
import React from 'react'

const ColorfulBlob = styled.div`
position: absolute;
z-index: -1;
right: 0px;
top: 0px;
width: 100%;
height: 500px;
border-radius: 2px;
background: hsla(148, 100%, 47%, 1);

background: linear-gradient(45deg, hsla(148, 100%, 47%, 1) 7%, hsla(204, 100%, 80%, 1) 40%, hsla(212, 75%, 50%, 1) 80%);

background: -moz-linear-gradient(45deg, hsla(148, 100%, 47%, 1) 7%, hsla(204, 100%, 80%, 1) 40%, hsla(212, 75%, 50%, 1) 80%);

background: -webkit-linear-gradient(45deg, hsla(148, 100%, 47%, 1) 7%, hsla(204, 100%, 80%, 1) 40%, hsla(212, 75%, 50%, 1) 80%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00EE6E", endColorstr="#97D5FF", GradientType=1 );

clip-path: polygon(0% 0%, 100% 0%, 100% 15.5%, 0% 81%);
`

export const ColorBlob = () => {
    return <ColorfulBlob />
}
