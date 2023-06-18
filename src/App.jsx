import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import NewGame from './components/NewGame';
import StartGame from './components/StartGame';
import Container from './components/Container';
import Centralize from './components/Centralize';

const App = () => {
  return (
    <>
      <Container>
        <Centralize>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<StartGame />}></Route>
              <Route path="/new-game" element={<NewGame />}></Route>
            </Routes>
          </BrowserRouter>
        </Centralize>
      </Container>
    </>
  );
};

export default App;