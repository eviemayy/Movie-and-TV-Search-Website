 /**@jsxImportSource @emotion/react */

import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getTVShow } from '../components/getTVShow';

const Page = styled.div`
    background-color: #2f445e;
    padding: 50px;
    margin: 0px;
    min-height: calc(100vh - 70px);
`;

function Button(props) {
    //console.log("== button props:", props);
    const styles = css`
        type: submit;
      color: ${props.secondary ? 'royalblue' : 'snow'};
      background-color: ${props.secondary ? 'whitesmoke' : 'royalblue'};
      border: 2px solid royalblue;
      padding: 10px;
      margin: 5px;
      margin-left: 15px;
      cursor: pointer;
      &:hover {
        background-color: dodgerblue;
      }
    `;
    return <button css={styles}>{props.children}</button>;
}

function InputDiv(props) {
    console.log("== inputDiv props:", props);
    const styles = css`
    margin: auto;
    width: 250px;
      color: ${props.secondary ? 'royalblue' : 'snow'};
      background-color: 'whitesmoke';
      border: 2px solid grey;
      padding: 10px;
      
      cursor: pointer;
      
    `;
    return <div css={styles}>{props.children}</div>;
}

function TVSearchPage({query}) {
    const [inputQuery, setinputQuery] = useState(query || "");
    const [TVShow, setTVShow] = useState([]);
    const [displaySwitch, setDisplaySwitch] = useState(true);

    const history = useHistory();
    useEffect(() => {
        let ignore = false;
        const findTVShow = async (e) => {
            let data;
            try {
                const res = await getTVShow(query);
                data = await res.data;
                console.log("data:",data);
            }catch (e) {
                if (e instanceof DOMException) {
                console.log("HTTP request aborted");
                } else {
                throw e;
                }
            }
            console.log("== data.Title:", data.Title);
            //setTVShow(data);
            if (!ignore) {
                console.log("== inputQuery:", query);
                console.log("== data:", data);
                setTVShow(data);

            }
        }
        findTVShow();
        return () => {
            //controller.abort();
            ignore = true;
        };

    }, [ query ]);

    return (
        <Page>
        <h1>TvSearchPage</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            history.push(`?q=${inputQuery}`);
            }}>
            <InputDiv>
            <input type="text" value={inputQuery}onChange={(e) => setinputQuery(e.target.value)}/>
            <Button>Search</Button>
            </InputDiv>
        </form>
        <h1>Results for {TVShow.Title}</h1>
        <h1>Year:  {TVShow.Year}</h1>
        
        <InfoDisplay
        display={displaySwitch}
        data={TVShow}
        handleClick={() => setDisplaySwitch(!displaySwitch)}
        />
        
        </Page>
    );
}

function InfoDisplay(props) {
    let element;
    if (props.display) {
      element = (
          <div>
        <p>
          Info:
        </p>
        <p>{props.data.Title}</p>
        </div>
      );
    } else {
      element = (
        <p></p>
      );
    }
    return (
      <div>
        {element}
        <button onClick={props.handleClick} type="button">
          Show Info
        </button>
      </div>
    );
  }

export default TVSearchPage;
