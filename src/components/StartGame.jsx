import Title from './Title';
import Paragraph from './Paragraph';
import RouterLink from './RouterLink';
import Button from './Button';

const StartGame = () => {
  return (
    <>
      <Title text="Palavras Secretas" />
      <Paragraph text="Clique no botão para começar a jogar!" />
      <RouterLink path="/new-game">
        <Button text="Começar jogo" />
      </RouterLink>
    </>
  );
};

export default StartGame;