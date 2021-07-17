import React, { Suspense, lazy } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navbar from './templates/Navbar/navbarTemplate';

//disable right click contex menu
document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;
const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const Home = lazy(() => import('./views/home'));
const Contact = lazy(() => import('./views/contact'));

function App( location ) {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Router>
          <Navbar />
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={ 300 }
                classNames="fade"
              >
                <Suspense fallback={
                  <div />
                }>
                  <Switch location={location}>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/contact" component={ Contact } />
                  </Switch>
                </Suspense>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </Router>
      </AppWrapper>
    </>
  );
}

export default App;
