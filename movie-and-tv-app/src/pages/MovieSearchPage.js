/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

import { useHistory } from 'react-router-dom';
import { useState } from 'react';
//import { getMovie } from '../components/getMovie';

import Button from '../components/Button';

const Page = styled.div`
    background-color: #2f445e;
    padding: 50px;
    margin: 0px;
    min-height: calc(100vh - 70px);
`;

const Form = styled.form`
    input[type=text] {
        width: 40%;
        height: 40px;
        padding: 12px 20px;
        margin: 5px 0;
        box-sizing: border-box;
}
`;

function MovieSearchPage({ query }) {
    const [inputQuery, setInputQuery] = useState(query || "");
    //const [isError, setIsError] = useState(false);
    const history = useHistory();


    return (
        <Page>
            <h1>Search Movies</h1>
            <Form onSubmit={(e) => {
                e.preventDefault();
                history.push(`/movies/results?q=${inputQuery}`);
            }}>
                <label>Movie Title*</label><br />
                <input type="text" value={inputQuery} onChange={e => setInputQuery(e.target.value)} ></input><br />
                <Button>Submit</Button>
            </Form>
            <p>* required</p>
        </Page>

    );
}

export default MovieSearchPage;