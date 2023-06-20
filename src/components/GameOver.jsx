import { Link } from 'react-router-dom';

import Button from './Button';

const GameOver = ({ score }) => {
  return (
    <>
      <h1>Fim de jogo!</h1>
      <p>A sua pontuação foi {score}</p>
      <Link to="/new-game">
        <Button text="Reiniciar" />
      </Link>
    </>
  );
};

export default GameOver;