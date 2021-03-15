/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

import { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';

const Page = styled.div`
    background-color: #2f445e;
    padding: 50px;
    margin: 0px;
    min-height: calc(100vh - 70px);

    .results-container{
        margin: 20px;
        display: flex;
        justify-content: space-between;
    }

    .results-text-container{
        width: 50%;
        margin: 5px;
        padding: 10px;
    }
`;


function MovieResults({ query }) {
    //const [inputQuery, setInputQuery] = useState(query || "");
    const [isError, setIsError] = useState(false);
    const [movie, setMovie] = useState({});
    //const history = useHistory();


    useEffect(() => {
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
                //setInputQuery("");
                setIsError(false);
                console.log("response body: ", responseBody);
                console.log("body.title: ", responseBody.Title);
                setMovie(responseBody);

            }

        }

        if (query) {
            console.log("if (query)");
            fetchMovieData();
        }

        //cleanup function
        return () => {
            controller.abort();
            ignore = true;
        };

    }, [query]);
    console.log(isError);


    return (
        <Page>
            <div className="results-container">
                <div className="results-text-container">
                    <h1>{movie.Title}</h1>
                    <p>Release date:  {movie.Released}</p>
                    <p>Rating:  {movie.Rated}</p>
                    <p>Runtime:  {movie.Runtime}</p>
                    <p>Genre:  {movie.Genre}</p>
                    <p>Director:  {movie.Director}</p>
                    <p>Writer:  {movie.Writer}</p>
                </div>
                <img src={movie.Poster} alt={movie.Title}></img>

            </div>

        </Page>
    );
}

export default MovieResults;