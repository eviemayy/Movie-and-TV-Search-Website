/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

import { useState, useEffect } from 'react';
import {
    Route,
    Switch,
    Link,
    useRouteMatch
} from 'react-router-dom';

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

    ul{
        list-style-type: none;
        margin: 20px;
        padding: 0;
        overflow: hidden;
        align-items: center;
        color: #ffffff;
    }

    li{
        float: left;
        height: 100%;
        text-decoration: none;
        color: #77CBB9;
    }
    li:hover{
        color: #60a294;
        cursor: pointer;
    }

    a{
        color: #ffffff;
        display: block;
        text-align: center;
        font-weight: 500;
        padding: 14px 16px;
        text-decoration: none;
        height: 100%;
    }
`;


function MovieResults({ query }) {
    const [isError, setIsError] = useState(false);
    const [movie, setMovie] = useState({});



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

            if (responseBody.Response === "False" || ignore) {
                console.log("responseBody.Response " + responseBody.Response);
                console.log("BAD REQ!!! NOT FOUND!!!");
                setIsError(true);
                setMovie({ Title: "Movie not found" });
            }
            else {
                //response will contain a parsed json
                console.log("if (!ignore)");
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

    const match = useRouteMatch();
    console.log("== match:", match);
    const { url, path } = match;

    function General() {
        return (
            <div className="results-container">
                <div className="results-text-container">
                    <h1>{movie.Title}</h1>



                    {movie.Title !== "Movie not found" && <p>Release date:  {movie.Released}</p>}
                    {movie.Title !== "Movie not found" && <p>Rating:  {movie.Rated}</p>}
                    {movie.Title !== "Movie not found" && <p>Runtime:  {movie.Runtime}</p>}
                    {movie.Title !== "Movie not found" && <p>Genre:  {movie.Genre}</p>}
                    {movie.Director !== "N/A" && movie.Title !== "Movie not found" &&
                        <p>Director:  {movie.Director}</p>
                    }

                </div>
                {movie.Title !== "Movie not found" &&
                    <img src={movie.Poster} alt={movie.Title}></img>
                }

            </div>
        );
    }

    function Plot() {
        return (
            <div className="results-container">
                <div className="results-text-container">
                    <h1>{movie.Title}</h1>
                    <p>Plot:  {movie.Plot}</p>
                </div>
                <img src={movie.Poster} alt={movie.Title}></img>
            </div>
        );
    }

    function Awards() {
        return (
            <div className="results-container">
                <div className="results-text-container">
                    <h1>{movie.Title}</h1>
                    <p>Awards:  {movie.Awards}</p>
                    <br/>
                    <p>Ratings: </p>
                    {
                        movie.Ratings ? movie.Ratings.map( (item) => {
                            return(
                            <div>
                                <p>{item.Source}</p>
                                <p>{item.Value}</p>
                            </div>
                        )}) : null
                    }
                </div>
                <img src={movie.Poster} alt={movie.Title}></img>
            </div>
        );
    }


    return (
        <Page>
            <ul>
                <li><Link to={`${url}/general`}>General Info</Link></li>
                <li><Link to={`${url}/plot`}>Plot</Link></li>
                <li><Link to={`${url}/awards`}>Awards</Link></li>
                <li color='#77CBB9'><Link to={`/movies`} >Search</Link></li>
            </ul>
            <Switch>
                <Route path={`${path}/general`}>
                    <General />
                </Route>
                <Route path={`${path}/plot`}>
                    <Plot />
                </Route>
                <Route path={`${path}/awards`}>
                    <Awards />
                </Route>
                <Route path={`${path}`}>
                    <General />
                </Route>
            </Switch>



        </Page>
    );
}

export default MovieResults;