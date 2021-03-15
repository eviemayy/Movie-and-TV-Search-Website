/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

import { useHistory } from 'react-router-dom';
import { useState } from 'react';
//import { getMovie } from '../components/getMovie';

const Page = styled.div`
    background-color: #2f445e;
    padding: 50px;
    margin: 0px;
    min-height: calc(100vh - 70px);
`;

const Form = styled.form`

`;

function MovieSearchPage({ query }) {
    const [inputQuery, setInputQuery] = useState(query || "");
    //const [isError, setIsError] = useState(false);
    const history = useHistory();


    /*useEffect(() => {
        let ignore = false;
        var APIKEY = "3ebf31f";
        const controller = new AbortController();
        console.log("Submitted... now searching");

        async function fetchMovieData() {
            let responseBody = {};
            setIsError(false);

            try {
                //http://www.omdbapi.com/?apikey=3ebf31f&t=Frozen
                const res = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${query}`, { signal: controller.signal });
                responseBody = await res.json(); //parse the body
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("HTTP request aborted");
                }
                else {
                    setIsError(true);
                    console.log(e);
                }
            }

            if (!ignore) {
                //response will contain a parsed json
                console.log("if (!ignore)");
                //setWeather(responseBody.list || []);
                setInputQuery("");
                setIsError(false);
                console.log("response body: ", responseBody);
                console.log("body.title: ", responseBody.Title);

            }

        }

        if (query) {
            console.log("if (query)");
            //fetchMovieData();
        }

        //cleanup function
        return () => {
            controller.abort();
            ignore = true;
        };

    }, [query]);
    console.log(isError);*/


    return (
        <Page>
            <h1>Search Movies</h1>
            <Form onSubmit={(e) => {
                e.preventDefault();
                history.push(`/movies/results?q=${inputQuery}`);
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