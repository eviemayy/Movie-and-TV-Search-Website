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

function TvSearchPage() {
    return (
        <Page>
            <h1>TvSearchPage</h1>
        </Page>

    );
}

export default TvSearchPage;