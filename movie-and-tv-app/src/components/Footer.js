/** @jsxRuntime classic */
/** @jsx jsx */

//import React from 'react'; dont need this anymore
import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';


const Foot = styled.footer`
    padding: 10px;
    font-size: 12px;
    background-color: #243447;
    color: #ffffff;
    height: 80px;
`;

function Footer(props) {
    return (
        <Foot>
            <p>Copyright 2021 Music and TV Search App</p>
        </Foot>
    );
}

export default Footer;