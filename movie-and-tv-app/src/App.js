import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Global, css } from '@emotion/react';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieSearchPage from "./pages/MovieSearchPage";
import TvSearchPage from './pages/TvSearchPage';
import Oops from './pages/Oops';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Roboto&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    font-weight: 400;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <NavigationBar />
      <Switch>
        <Route path="/movies">
          <MovieSearchPage />
        </Route>
        <Route path="/tv">
          <TvSearchPage />
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
