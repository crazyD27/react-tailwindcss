import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Play from './components/Play';
import GameOver from './components/GameOver';
import Game from './components/Game';

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-blue-950 grid place-items-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Play />}></Route>
              <Route path="/new-game" element={<Game />}></Route>
              <Route path="/game-over" element={<GameOver />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;