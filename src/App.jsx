import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Play from './components/Play';
import GameOver from './components/GameOver';
import Game from './components/Game';
import Win from './components/Win';

const App = () => {
  const [score, setScore] = React.useState(0);

  return (
    <>
      <div className="w-full h-screen bg-blue-950 grid place-items-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Play />}></Route>
              <Route path="/game" element={<Game score={score} setScore={setScore} />}></Route>
              <Route path="/game-over" element={<GameOver score={score} />}></Route>
              <Route path="/win" element={<Win score={score} />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;