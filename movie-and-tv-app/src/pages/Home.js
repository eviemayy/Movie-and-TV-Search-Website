/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

const Page = styled.div`
    background-color: #2f445e;
    padding: 50px;
    margin: 0px;
    min-height: calc(100vh - 70px);
`;

const WebsiteTitle = styled.h1`
    padding: 0px;
    margin: 0;
    color: #ffffff;
    font-size: 75px;
`;

const DescriptionBox = styled.div`
    width: 50%;
`;


function Home() {
    return (
        <Page>
            <br></br>
            <br></br>
            <br></br>
            <WebsiteTitle>Website Title</WebsiteTitle>
            <DescriptionBox>
                <p>Welcome! Use this website to look up information about movies and tv shows. Navigate to the Movies tab to search movies and use the
            TV Shows tab to search through TV Shows.</p>
            </DescriptionBox>
        </Page>

    );
}

export default Home;