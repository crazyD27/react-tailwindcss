import { Link } from 'react-router-dom';

import Title from './Title';
import Paragraph from './Paragraph';
import Button from './Button';

const GameOver = ({ score }) => {
  return (
    <>
      <Title>Fim de jogo!</Title>
      <Paragraph>A sua pontuação foi {score}</Paragraph>
      <Link to="/game">
        <Button text="Reiniciar" />
      </Link>
    </>
  );
};

export default GameOver;