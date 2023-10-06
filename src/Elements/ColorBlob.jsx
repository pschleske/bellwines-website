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

background-image: linear-gradient(
  225deg,
  hsl(194deg 87% 56%) 9%,
  hsl(266deg 92% 71%) 78%,
  hsl(337deg 97% 86%) 100%
);

clip-path: polygon(0% 0%, 100% 0%, 100% 21%, 0% 79.3%);
`

export const ColorBlob = () => {
    return <ColorfulBlob />
}



// background: hsla(333, 81 %, 71 %, 1);

// background: linear - gradient(45deg, hsla(333, 81 %, 71 %, 1) 0 %, hsla(186, 86 %, 65 %, 1) 28 %, hsla(205, 82 %, 61 %, 1) 90 %, hsla(333, 100 %, 79 %, 1) 100 %);

// background: -moz - linear - gradient(45deg, hsla(333, 81 %, 71 %, 1) 0 %, hsla(186, 86 %, 65 %, 1) 28 %, hsla(205, 82 %, 61 %, 1) 90 %, hsla(333, 100 %, 79 %, 1) 100 %);

// background: -webkit - linear - gradient(45deg, hsla(333, 81 %, 71 %, 1) 0 %, hsla(186, 86 %, 65 %, 1) 28 %, hsla(205, 82 %, 61 %, 1) 90 %, hsla(333, 100 %, 79 %, 1) 100 %);

// filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = "#F178AF", endColorstr = "#5ae4f3", GradientType = 1);



// background: hsla(343, 100 %, 66 %, 1);

// background: linear - gradient(45deg, hsla(343, 100 %, 66 %, 1) 0 %, hsla(204, 100 %, 80 %, 1) 19 %, hsla(212, 75 %, 50 %, 1) 55 %, hsla(204, 100 %, 80 %, 1) 89 %, hsla(33, 100 %, 53 %, 1) 100 %);

// background: -moz - linear - gradient(45deg, hsla(343, 100 %, 66 %, 1) 0 %, hsla(204, 100 %, 80 %, 1) 19 %, hsla(212, 75 %, 50 %, 1) 55 %, hsla(204, 100 %, 80 %, 1) 89 %, hsla(33, 100 %, 53 %, 1) 100 %);

// background: -webkit - linear - gradient(45deg, hsla(343, 100 %, 66 %, 1) 0 %, hsla(204, 100 %, 80 %, 1) 19 %, hsla(212, 75 %, 50 %, 1) 55 %, hsla(204, 100 %, 80 %, 1) 89 %, hsla(33, 100 %, 53 %, 1) 100 %);

// filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = "#FF5282", endColorstr = "#97d5ff", GradientType = 1);