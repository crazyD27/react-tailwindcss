import { Link } from 'react-router-dom';

import Title from './Title';
import Paragraph from './Paragraph';
import Button from './Button';

const Win = ({ score }) => {
  return (
    <>
      <Title>Voce ganhou!</Title>
      <Paragraph>A sua pontuação foi {score}</Paragraph>
      <Link to="/game">
        <Button text="Jogar novamente" />
      </Link>
    </>
  );
};

export default Win;
