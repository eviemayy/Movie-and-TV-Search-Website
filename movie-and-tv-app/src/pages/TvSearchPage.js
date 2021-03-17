/**@jsxImportSource @emotion/react */

import styled from '@emotion/styled/macro';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';

//import { getTVShow } from '../components/getTVShow';

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
/*
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
*/

function TVSearchPage({ query }) {
  const [inputQuery, setinputQuery] = useState(query || "");

  const history = useHistory();

  return (
    <Page>
      <h1>Search TV Shows</h1>
      <Form onSubmit={(e) => {
        e.preventDefault();
        history.push(`/tv/results?q=${inputQuery}`);
      }}>
          <p>TV Show Title*</p>
          <input type="text" value={inputQuery} onChange={(e) => setinputQuery(e.target.value)} /><br />
          <Button>Search</Button>
          <p>*required</p>
        
      </Form>

    </Page>
  );
}

export default TVSearchPage;
