/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

import queryString from 'query-string';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Page = styled.div`
    background-color: #2f445e;
    padding: 50px;
    margin: 0px;
    min-height: calc(100vh - 70px);
`;

const Form = styled.form`

`;

function MovieSearchPage(props) {
    const [inputQuery, setInputQuery] = useState(props.query || "");
    const history = useHistory();

    return (
        <Page>
            <h1>Search Movies</h1>
            <Form onSubmit={(e) => {
                e.preventDefault();
                history.push(`?q=${inputQuery}`);
            }}>
                <label>Movie Title*</label><br />
                <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} ></input><br />
                <button type="submit">Submit</button>
            </Form>
            <p>* required</p>
        </Page>

    );
}

export default MovieSearchPage;