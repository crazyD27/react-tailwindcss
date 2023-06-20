import { Link } from 'react-router-dom';

import Button from './Button';

const Play = () => {
  return (
    <>
      <h1>Palavras Secretas</h1>
      <p>Clique no botão para começar a jogar!</p>
      <Link to="/new-game">
        <Button text="Começar jogo" />
      </Link>
    </>
  );
};

export default Play;