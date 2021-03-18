/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

const Page = styled.div`
    background-color: #2f445e;
    padding: 10px;
    margin: 0px;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        align-self: center;
        font-size: 50px;
    }

    img{
        align-self: center;
        font-size: 70px;
        height: 400px;
        width: 600px;
        padding: 20px;
    }
`;

function Oops() {
    return (
        <Page>

            <img src="https://media.giphy.com/media/26xBzXOrvZ8y5Wro4/giphy.gif" alt="404 page"></img>
            <h1>Oh no! Page not found</h1>
        </Page>
    );
}

export default Oops;