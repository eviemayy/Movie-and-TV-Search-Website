import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Global, css } from '@emotion/react';

import queryString from 'query-string';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieSearchPage from "./pages/MovieSearchPage";
import TvSearchPage from './pages/TvSearchPage';
import Oops from './pages/Oops';
import MovieResults from './pages/MovieResults';
import TVShowResults from './pages/TVShowResults';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Roboto&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    font-weight: 400;
    color: #ffffff;
  }
`;

function useQueryString() {
  return queryString.parse(useLocation().search);
}

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <NavigationBar />
      <Switch>
        <Route exact path="/movies">
          <MovieSearchPage query={useQueryString().q} />
        </Route>
        <Route exact path="/tv">
          <TvSearchPage query={useQueryString().q}/>
        </Route>
        <Route path="/tv/results">
          <TVShowResults query={useQueryString().q}/>
        </Route>
        <Route path="/movies/results">
          <MovieResults query={useQueryString().q} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/">
          <Oops />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
export default App;