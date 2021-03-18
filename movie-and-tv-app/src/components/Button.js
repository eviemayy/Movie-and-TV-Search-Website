/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

const ButtonStyle = styled.button`
    background-color: #77CBB9;
    color: #243447;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 10%;
    margin-top: 10px;

    &:hover{
        background-color: #60a294;
        cursor: pointer;
    }
`;

function Button(props) {
    return (
        <ButtonStyle type="submit">{props.children}</ButtonStyle>
    );
}

export default Button;