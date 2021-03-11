/** @jsxRuntime classic */
/** @jsx jsx */

import { NavLink } from 'react-router-dom';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

//import { useReducer } from "react";


const Container = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    align-items: center;
    background-color: #243447;
    color: #fffff;


    .mainLinkStyle{
        float: left;
        height: 100%;
        width: 15%;
    }

    .navLinkStyle{
        color: #ffffff;
        display: block;
        text-align: center;
        font-weight: 500;
        padding: 14px 16px;
        text-decoration: none;
        height: 100%;
        &:hover{
            background-color: #141d27;
        }
    }
   
`;

//const Button = styled.botton``;


function NavigationBar(props) {

    return (
        <Container>
            <li className="mainLinkStyle"><NavLink className="navLinkStyle" exact to="/">App Name TBD</NavLink></li>
            <li className="mainLinkStyle"><NavLink className="navLinkStyle" to="/movies">Movies</NavLink></li>
            <li className="mainLinkStyle"><NavLink className="navLinkStyle" to="/tv">TV Shows</NavLink></li>
        </Container>

    );
}

export default NavigationBar;