import { Link } from 'react-router-dom';

import Title from './Title';
import Paragraph from './Paragraph';
import Button from './Button';

const Play = () => {
  return (
    <>
      <Title>Palavras Secretas</Title>
      <Paragraph>Clique no botão para começar a jogar!</Paragraph>
      <Link to="/game">
        <Button text="Começar jogo" />
      </Link>
    </>
  );
};

export default Play;