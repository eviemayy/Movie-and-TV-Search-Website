/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

//import { getTVShow } from '../components/getTVShow';

import { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
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
const EpDiv = styled.div `
    margin: 5px;
    width: 225px;
    background-color: #2f445e;
    border: 2px solid grey;
    padding: 5px;
`;
const AllEpDiv = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row wrap;
`;



function TVShowResults({ query }) {
    //const [inputQuery, setInputQuery] = useState(query || "");
    const [isError, setIsError] = useState(false);
    const [TVShow, setTVShow] = useState({});
    const [seasons, setSeason] = useState(false);
    const [episodes, setEpisode] = useState(false);
    const [found, setFound] = useState(true);
    //const [TVShow, setTVShow] = useState([]);
    //const history = useHistory();


    useEffect(() => {
        let ignore = false;
        var APIKEY = "3ebf31f";
        const controller = new AbortController();
        console.log("Submitted... now searching");

        async function fetchTVShowData() {
            //let data = {};
            let responseBody = {};
            setIsError(false);

            try {
                //const res = await getTVShow(query);
                //data = await res.data;
                console.log("queries:",query);
                var delims = '-';
                var tokens = query.split(delims);
                console.log("tokens: ", tokens);
                var res;
                if(tokens[1]){
                    setSeason(true);
                }
                if(tokens[2]){
                    setEpisode(true);
                    console.log("ep");
                }
                if(tokens[1] && tokens[2]){
                    res = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${tokens[0]}&type=series&season=${tokens[1]}&episode=${tokens[2]}`, { signal: controller.signal });
                }else if(tokens[1]){
                    res = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${tokens[0]}&type=series&season=${tokens[1]}`, { signal: controller.signal });
                }else{
                res = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${tokens[0]}&type=series`, { signal: controller.signal });
                }

                //res = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${query}`, { signal: controller.signal });
                
                responseBody = await res.json();
                //data = await res.json(); //parse the body
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
                //setWeather(data.list || []);
                //setInputQuery("");
                setIsError(false);
                //console.log("response body: ", data);
                //console.log("body.title: ", data.Title);
                //setTVShow(data);

                console.log("response body: ", responseBody);
                console.log("body.title: ", responseBody.Title);
                if(responseBody.Response === "False"){
                    setFound(false);
                }
                setTVShow(responseBody);

            }

        }

        if (query) {
            console.log("if (query)");
            fetchTVShowData();
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
                    <h1>{TVShow.Title}</h1>
                    <p>{TVShow.imdbRating}/10</p>
                    <p>Release date:  {TVShow.Released}</p>
                    <p>Rating:  {TVShow.Rated}</p>
                    <p>Seasons:  {TVShow.totalSeasons}</p>
                    <p>Runtime:  {TVShow.Runtime}</p>
                    <p>Genre:  {TVShow.Genre}</p>
                    { TVShow.Director !== "N/A" && 
                        <p>Director:  {TVShow.Director}</p>
                    }
                    <p>Writer:  {TVShow.Writer}</p>
                </div>
                <img src={TVShow.Poster} alt={TVShow.Title}></img>

            </div>
        );
    }
    function GeneralSE() {
        
        return (
            <div className="results-container">
                <div className="results-text-container">
                    <h1>{TVShow.Title}</h1>
                    <h3>Season: {TVShow.Season}, Episode: {TVShow.Episode}</h3>
                    <p>{TVShow.imdbRating}/10</p>
                    <p>Release date:  {TVShow.Released}</p>
                    <p>Rating:  {TVShow.Rated}</p>
                    <p>Runtime:  {TVShow.Runtime}</p>
                    <p>Genre:  {TVShow.Genre}</p>
                    { TVShow.Actors !== "N/A" && 
                    <p>Actors:  {TVShow.Actors}</p>
                    }
                    { TVShow.Director !== "N/A" && 
                        <p>Director:  {TVShow.Director}</p>
                    }
                    { TVShow.Writer !== "N/A" && 
                    <p>Writer:  {TVShow.Writer}</p>
                    }
                    
                </div>
                <img src={TVShow.Poster} alt={TVShow.Title}></img>

            </div>
        );
    }
    function GeneralS() {
        
        return (
            <div className="results-container">
                <div className="results-text-container">
                    <h1>{TVShow.Title}</h1>
                    <h2>Season: {TVShow.Season} of {TVShow.totalSeasons}</h2>
                    <AllEpDiv>
                    { TVShow.Episodes && 
                    TVShow.Episodes.map(eps => (
                    <EpDiv>
                        <h3>{eps.Title}</h3>
                        <h4>Episode: {eps.Episode}  |   Rated: {eps.imdbRating}/10</h4>
                    </EpDiv>
                    
                    
                    ))}
                    </AllEpDiv>
                    
                    
                </div>
                

            </div>
        );
    }

    function Plot() {
        return (
            <div className="results-container">
                <div className="results-text-container">
                    <h1>{TVShow.Title}</h1>
                    <p>Plot:  {TVShow.Plot}</p>
                </div>
                <img src={TVShow.Poster} alt={TVShow.Title}></img>
            </div>
        );
    }

    function Awards() {
        return (
            <div className="results-container">
                <div className="results-text-container">
                    <h1>{TVShow.Title}</h1>
                    <p>Awards:  {TVShow.Awards}</p>
                </div>
                <img src={TVShow.Poster} alt={TVShow.Title}></img>
            </div>
        );
    }
    if(!found){
        return (
            <Page>
                <ul>
                    <li><Link to={`/tv`}>Back</Link></li>
                </ul>
                <Switch>
                    <Route path={`${path}/general`}>
                        <h1>Show not found.</h1>
                    </Route>
                    <Route path={`${path}`}>
                        <h1>Show not found.</h1>
                        <img src={TVShow.Poster} alt={TVShow.Title}></img>
                    </Route>
                </Switch>
            </Page>
        );
    
    }else if(seasons && episodes){
        return (
            <Page>
                <ul>
                    <li><Link to={`/tv`}>Back</Link></li>
                    <li><Link to={`${url}/general`}>General Info</Link></li>
                    <li><Link to={`${url}/plot`}>Plot</Link></li>
                </ul>
                <Switch>
                    <Route path={`${path}/general`}>
                        <GeneralSE />
                    </Route>
                    <Route path={`${path}/plot`}>
                        <Plot />
                    </Route>
                    <Route path={`${path}`}>
                        <GeneralSE />
                    </Route>
                </Switch>
    
    
    
            </Page>
        );
    
    } else if(seasons){
        return (
            <Page>
                <ul>
                    <li><Link to={`/tv`}>Back</Link></li>
                    <li><Link to={`${url}/general`}>General Info</Link></li>
                </ul>
                <Switch>
                    <Route path={`${path}/general`}>
                        <GeneralS />
                    </Route>
                    <Route path={`${path}`}>
                        <GeneralS />
                    </Route>
                </Switch>
            </Page>
        );
    } else {
        return (
            <Page>
                <ul>
                    <li><Link to={`/tv`}>Back</Link></li>
                    <li><Link to={`${url}/general`}>General Info</Link></li>
                    <li><Link to={`${url}/plot`}>Plot</Link></li>
                    <li><Link to={`${url}/awards`}>Awards</Link></li>
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
}

export default TVShowResults;